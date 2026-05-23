
import { NextResponse } from 'next/server'

function detectRisk(title) {
  const text = title.toLowerCase()

  const riskyWords = [
    'guaranteed',
    'vip',
    'telegram',
    'whatsapp',
    '100%',
    'jackpot',
    'profit',
    'no loss'
  ]

  const matched = riskyWords.filter(word =>
    text.includes(word)
  )

  if (matched.length >= 3) return 'Critical'
  if (matched.length >= 2) return 'High'
  return 'Medium'
}

export async function POST(req) {
  try {
    const body = await req.json()
    const keywords = body.keywords || []

    const API_KEY = process.env.YOUTUBE_API_KEY

    if (!API_KEY) {
      return NextResponse.json(
        { error: 'Missing YouTube API Key' },
        { status: 500 }
      )
    }

    const searches = await Promise.all(
      keywords.slice(0, 5).map(async (keyword) => {

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            keyword
          )}&type=video&maxResults=5&key=${API_KEY}`
        )

        const data = await response.json()

        if (!data.items) return []

        return data.items.map((item) => ({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails.medium.url,
          videoId: item.id.videoId,
          url: `https://youtube.com/watch?v=${item.id.videoId}`,
          keyword,
          type: item.snippet.title
            .toLowerCase()
            .includes('shorts')
              ? 'Shorts'
              : 'Long Video',
          risk: detectRisk(item.snippet.title)
        }))
      })
    )

    return NextResponse.json({
      videos: searches.flat(),
    })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    )
  }
}
