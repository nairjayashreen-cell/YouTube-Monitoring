// YouTube Transcript Extraction API Route
// Attempts to fetch captions, with Whisper AI fallback structure

export async function POST(request) {
  try {
    const { videoId, videoUrl } = await request.json()
    
    if (!videoId) {
      return Response.json(
        { error: 'Video ID is required' },
        { status: 400 }
      )
    }
    
    // Try to get YouTube captions first
    const captionResult = await fetchYouTubeCaptions(videoId)
    
    if (captionResult.success) {
      return Response.json({
        transcript: captionResult.transcript,
        source: 'youtube_captions',
        videoId,
      })
    }
    
    // If captions not available, return structure for Whisper AI fallback
    // Note: Full Whisper implementation would require downloading audio
    // and sending to OpenAI Whisper API
    return Response.json({
      transcript: null,
      source: 'whisper_required',
      videoId,
      message: 'YouTube captions not available. Whisper AI transcription would be needed.',
      whisperConfig: {
        model: 'whisper-1',
        audioUrl: `https://www.youtube.com/watch?v=${videoId}`,
        // In production, you would:
        // 1. Use yt-dlp or similar to extract audio
        // 2. Send to OpenAI Whisper API
        // 3. Return transcribed text
      }
    })
    
  } catch (error) {
    console.error('Transcript extraction error:', error)
    return Response.json(
      { error: 'Failed to extract transcript' },
      { status: 500 }
    )
  }
}

async function fetchYouTubeCaptions(videoId) {
  try {
    // Fetch the video page to extract caption tracks
    const videoPageUrl = `https://www.youtube.com/watch?v=${videoId}`
    const response = await fetch(videoPageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })
    
    if (!response.ok) {
      return { success: false, error: 'Failed to fetch video page' }
    }
    
    const html = await response.text()
    
    // Extract captions data from YouTube page
    const captionMatch = html.match(/"captionTracks":\s*(\[.*?\])/)
    
    if (!captionMatch) {
      return { success: false, error: 'No captions available' }
    }
    
    try {
      const captionTracks = JSON.parse(captionMatch[1])
      
      if (!captionTracks || captionTracks.length === 0) {
        return { success: false, error: 'No caption tracks found' }
      }
      
      // Prefer English captions, fall back to first available
      const englishTrack = captionTracks.find(track => 
        track.languageCode === 'en' || 
        track.languageCode?.startsWith('en')
      )
      
      const selectedTrack = englishTrack || captionTracks[0]
      
      if (!selectedTrack.baseUrl) {
        return { success: false, error: 'No caption URL found' }
      }
      
      // Fetch the actual captions
      const captionsResponse = await fetch(selectedTrack.baseUrl)
      
      if (!captionsResponse.ok) {
        return { success: false, error: 'Failed to fetch captions' }
      }
      
      const captionsXml = await captionsResponse.text()
      
      // Parse XML captions to plain text
      const textMatches = captionsXml.match(/<text[^>]*>([^<]*)<\/text>/g)
      
      if (!textMatches) {
        return { success: false, error: 'Failed to parse captions' }
      }
      
      const transcript = textMatches
        .map(match => {
          const textContent = match.replace(/<[^>]+>/g, '')
          return decodeHTMLEntities(textContent)
        })
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
      
      return { success: true, transcript }
      
    } catch (parseError) {
      return { success: false, error: 'Failed to parse caption data' }
    }
    
  } catch (error) {
    return { success: false, error: error.message }
  }
}

function decodeHTMLEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&#x27;': "'",
    '&#x2F;': '/',
    '&#32;': ' ',
    '&nbsp;': ' ',
  }
  
  let decoded = text
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char)
  }
  
  // Handle numeric entities
  decoded = decoded.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num)))
  decoded = decoded.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
  
  return decoded
}
