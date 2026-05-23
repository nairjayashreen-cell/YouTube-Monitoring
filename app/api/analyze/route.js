// Fraud Analysis API Route
// Scans transcripts for fraud indicators and assigns risk levels

// Fraud detection phrases with severity weights
const FRAUD_PHRASES = [
  // Critical risk phrases (weight: 3)
  { phrase: 'guaranteed profit', weight: 3, category: 'False Promises' },
  { phrase: 'guaranteed returns', weight: 3, category: 'False Promises' },
  { phrase: 'no loss', weight: 3, category: 'False Promises' },
  { phrase: '100% profit', weight: 3, category: 'False Promises' },
  { phrase: '100% sure', weight: 3, category: 'False Promises' },
  { phrase: 'risk free', weight: 3, category: 'False Promises' },
  { phrase: 'zero risk', weight: 3, category: 'False Promises' },
  
  // High risk phrases (weight: 2)
  { phrase: 'vip group', weight: 2, category: 'Lead Generation' },
  { phrase: 'signal group', weight: 2, category: 'Lead Generation' },
  { phrase: 'premium group', weight: 2, category: 'Lead Generation' },
  { phrase: 'telegram', weight: 2, category: 'External Funnel' },
  { phrase: 'whatsapp', weight: 2, category: 'External Funnel' },
  { phrase: 'join my group', weight: 2, category: 'Lead Generation' },
  { phrase: 'join our group', weight: 2, category: 'Lead Generation' },
  { phrase: 'dm me', weight: 2, category: 'Direct Contact' },
  { phrase: 'contact me', weight: 2, category: 'Direct Contact' },
  { phrase: 'message me', weight: 2, category: 'Direct Contact' },
  { phrase: 'link in bio', weight: 2, category: 'External Funnel' },
  { phrase: 'link in description', weight: 2, category: 'External Funnel' },
  
  // Medium risk phrases (weight: 1)
  { phrase: 'sure shot', weight: 1, category: 'Misleading Claims' },
  { phrase: 'jackpot', weight: 1, category: 'Misleading Claims' },
  { phrase: 'secret strategy', weight: 1, category: 'Misleading Claims' },
  { phrase: 'banks hate', weight: 1, category: 'Misleading Claims' },
  { phrase: 'brokers hate', weight: 1, category: 'Misleading Claims' },
  { phrase: 'hidden method', weight: 1, category: 'Misleading Claims' },
  { phrase: 'easy money', weight: 1, category: 'Misleading Claims' },
  { phrase: 'get rich', weight: 1, category: 'Misleading Claims' },
  { phrase: 'quick money', weight: 1, category: 'Misleading Claims' },
  { phrase: 'free signals', weight: 1, category: 'Lead Generation' },
  { phrase: 'free tips', weight: 1, category: 'Lead Generation' },
]

export async function POST(request) {
  try {
    const { videos, brands = [] } = await request.json()
    
    if (!videos || !Array.isArray(videos)) {
      return Response.json(
        { error: 'Videos array is required' },
        { status: 400 }
      )
    }
    
    const analyzedVideos = videos.map(video => analyzeVideo(video, brands))
    
    // Sort by risk score (highest first)
    analyzedVideos.sort((a, b) => b.riskScore - a.riskScore)
    
    // Calculate summary statistics
    const summary = {
      total: analyzedVideos.length,
      critical: analyzedVideos.filter(v => v.riskLevel === 'critical').length,
      high: analyzedVideos.filter(v => v.riskLevel === 'high').length,
      medium: analyzedVideos.filter(v => v.riskLevel === 'medium').length,
      low: analyzedVideos.filter(v => v.riskLevel === 'low').length,
    }
    
    return Response.json({
      videos: analyzedVideos,
      summary,
    })
    
  } catch (error) {
    console.error('Analysis error:', error)
    return Response.json(
      { error: 'Failed to analyze videos' },
      { status: 500 }
    )
  }
}

function analyzeVideo(video, brands) {
  const textToAnalyze = [
    video.title || '',
    video.description || '',
    video.transcript || '',
  ].join(' ').toLowerCase()
  
  const detectedPhrases = []
  let totalScore = 0
  
  // Check for fraud phrases
  for (const { phrase, weight, category } of FRAUD_PHRASES) {
    const regex = new RegExp(phrase.toLowerCase(), 'gi')
    const matches = textToAnalyze.match(regex)
    
    if (matches) {
      totalScore += weight * matches.length
      detectedPhrases.push({
        phrase,
        count: matches.length,
        weight,
        category,
      })
    }
  }
  
  // Check for brand impersonation
  const brandImpersonation = []
  for (const brand of brands) {
    if (!brand) continue
    const brandLower = brand.toLowerCase().trim()
    if (brandLower && textToAnalyze.includes(brandLower)) {
      // Check if channel name doesn't match the brand (potential impersonation)
      const channelLower = (video.channel || '').toLowerCase()
      if (!channelLower.includes(brandLower)) {
        brandImpersonation.push(brand)
        totalScore += 2 // Brand impersonation is high risk
      }
    }
  }
  
  // Determine risk level based on score
  let riskLevel
  if (totalScore >= 6) {
    riskLevel = 'critical'
  } else if (totalScore >= 4) {
    riskLevel = 'high'
  } else if (totalScore >= 2) {
    riskLevel = 'medium'
  } else {
    riskLevel = 'low'
  }
  
  // Generate risk signal description
  const signals = []
  if (brandImpersonation.length > 0) {
    signals.push(`Brand Impersonation: ${brandImpersonation.join(', ')}`)
  }
  
  const categories = [...new Set(detectedPhrases.map(p => p.category))]
  signals.push(...categories)
  
  const riskSignal = signals.length > 0 
    ? signals.slice(0, 2).join(' + ')
    : 'Low risk content'
  
  return {
    ...video,
    riskScore: totalScore,
    riskLevel,
    riskSignal,
    detectedPhrases,
    brandImpersonation,
    analyzedAt: new Date().toISOString(),
  }
}
