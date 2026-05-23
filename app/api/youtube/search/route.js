// YouTube Search API Route
// Fetches videos from YouTube based on keywords

export async function POST(request) {
  try {
    const { keywords } = await request.json()
    
    const apiKey = process.env.YOUTUBE_API_KEY
    
    if (!apiKey) {
      return Response.json(
        { error: 'YouTube API key not configured. Please add YOUTUBE_API_KEY to environment variables.' },
        { status: 500 }
      )
    }
    
    if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
      return Response.json(
        { error: 'No keywords provided' },
        { status: 400 }
      )
    }
    
    const allVideos = []
    const seenVideoIds = new Set()
    
    // Search for each keyword
    for (const keyword of keywords) {
      try {
        const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search')
        searchUrl.searchParams.set('part', 'snippet')
        searchUrl.searchParams.set('q', keyword)
        searchUrl.searchParams.set('type', 'video')
        searchUrl.searchParams.set('maxResults', '10')
        searchUrl.searchParams.set('order', 'date')
        searchUrl.searchParams.set('publishedAfter', getDateWeeksAgo(2))
        searchUrl.searchParams.set('key', apiKey)
        
        const searchResponse = await fetch(searchUrl.toString())
        
        if (!searchResponse.ok) {
          const errorData = await searchResponse.json()
          console.error(`YouTube API error for keyword "${keyword}":`, errorData)
          continue
        }
        
        const searchData = await searchResponse.json()
        
        if (!searchData.items || searchData.items.length === 0) {
          continue
        }
        
        // Get video IDs for statistics
        const videoIds = searchData.items
          .map(item => item.id.videoId)
          .filter(id => !seenVideoIds.has(id))
        
        if (videoIds.length === 0) continue
        
        // Fetch video statistics
        const statsUrl = new URL('https://www.googleapis.com/youtube/v3/videos')
        statsUrl.searchParams.set('part', 'statistics,snippet')
        statsUrl.searchParams.set('id', videoIds.join(','))
        statsUrl.searchParams.set('key', apiKey)
        
        const statsResponse = await fetch(statsUrl.toString())
        
        if (!statsResponse.ok) {
          console.error('Failed to fetch video statistics')
          continue
        }
        
        const statsData = await statsResponse.json()
        
        // Combine search results with statistics
        for (const video of statsData.items) {
          if (seenVideoIds.has(video.id)) continue
          seenVideoIds.add(video.id)
          
          allVideos.push({
            id: video.id,
            title: video.snippet.title,
            description: video.snippet.description,
            channel: video.snippet.channelTitle,
            channelId: video.snippet.channelId,
            publishedAt: video.snippet.publishedAt,
            thumbnailUrl: video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url,
            views: parseInt(video.statistics.viewCount || 0),
            likes: parseInt(video.statistics.likeCount || 0),
            commentCount: parseInt(video.statistics.commentCount || 0),
            url: `https://www.youtube.com/watch?v=${video.id}`,
            matchedKeyword: keyword,
          })
        }
      } catch (keywordError) {
        console.error(`Error searching for keyword "${keyword}":`, keywordError)
      }
    }
    
    // Sort by views (highest first)
    allVideos.sort((a, b) => b.views - a.views)
    
    return Response.json({ 
      videos: allVideos,
      totalFound: allVideos.length 
    })
    
  } catch (error) {
    console.error('YouTube search error:', error)
    return Response.json(
      { error: 'Failed to search YouTube. Please try again.' },
      { status: 500 }
    )
  }
}

function getDateWeeksAgo(weeks) {
  const date = new Date()
  date.setDate(date.getDate() - (weeks * 7))
  return date.toISOString()
}
