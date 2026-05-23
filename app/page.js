'use client'

import { useState, useCallback } from 'react'

// Icons
function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function SearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function PlayIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function MicIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

function AlertIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function FileIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function BellIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function SettingsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function KeyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  )
}

function TagIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}

function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}

function ChevronRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function LoaderIcon({ className }) {
  return (
    <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  )
}

function TableIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}

// Navbar Component
function Navbar() {
  return (
    <header className="glass-card border-b border-border sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center glow-cyan">
              <ShieldIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">FraudShield</h1>
              <p className="text-xs text-muted-foreground">YouTube Intelligence</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              Dashboard
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              Reports
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              Analytics
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              Settings
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <BellIcon className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full" />
            </button>
            <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <SettingsIcon className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-sm font-semibold text-white">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Stats Card Component
function StatsCard({ label, value, trend, icon: Icon, isLoading }) {
  return (
    <div className="glass-card rounded-2xl p-5 gradient-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          {isLoading ? (
            <div className="h-8 w-16 bg-secondary/50 rounded animate-pulse" />
          ) : (
            <p className="text-2xl font-bold text-foreground">{value}</p>
          )}
          {trend !== undefined && !isLoading && (
            <p className={`text-xs mt-1 ${trend > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
              {trend > 0 ? '+' : ''}{trend}% from last week
            </p>
          )}
        </div>
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
    </div>
  )
}

// Workflow Step Component
function WorkflowStep({ step, title, description, icon: Icon, status, isLast }) {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500 glow-cyan'
      case 'active':
        return 'bg-gradient-to-br from-cyan-500 to-violet-500 glow-cyan animate-pulse'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-secondary border border-border'
    }
  }

  const getIconColor = () => {
    switch (status) {
      case 'completed':
      case 'active':
        return 'text-white'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${getStatusStyles()}`}>
        {status === 'completed' ? (
          <CheckIcon className="w-5 h-5 text-white" />
        ) : status === 'error' ? (
          <XIcon className="w-5 h-5 text-white" />
        ) : status === 'active' ? (
          <LoaderIcon className="w-5 h-5 text-white" />
        ) : (
          <Icon className={`w-5 h-5 ${getIconColor()}`} />
        )}
        <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-background border border-border flex items-center justify-center text-xs font-medium text-muted-foreground">
          {step}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${status === 'active' || status === 'completed' ? 'text-foreground' : 'text-muted-foreground'}`}>{title}</p>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
      {!isLast && (
        <ChevronRightIcon className="w-5 h-5 text-border hidden lg:block" />
      )}
    </div>
  )
}

// Risk Badge Component
function RiskBadge({ level }) {
  const styles = {
    critical: 'bg-red-500/10 text-red-400 border-red-500/20',
    high: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[level] || styles.low}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  )
}

// Phrase Badge Component
function PhraseBadge({ phrase, category }) {
  const categoryStyles = {
    'False Promises': 'bg-red-500/10 text-red-400 border-red-500/20',
    'Lead Generation': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'External Funnel': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    'Direct Contact': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'Misleading Claims': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${categoryStyles[category] || 'bg-secondary text-foreground border-border'}`}>
      {phrase}
    </span>
  )
}

// Error Alert Component
function ErrorAlert({ message, onDismiss }) {
  return (
    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
      <AlertIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-sm text-red-400 font-medium">Error</p>
        <p className="text-sm text-red-400/80 mt-1">{message}</p>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="p-1 hover:bg-red-500/20 rounded transition-colors">
          <XIcon className="w-4 h-4 text-red-400" />
        </button>
      )}
    </div>
  )
}

// Format view count
function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M'
  }
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K'
  }
  return views.toString()
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return '1 week ago'
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return date.toLocaleDateString()
}

export default function Home() {
  const [brands, setBrands] = useState('Zerodha\nGroww\nAngel One\nUpstox\nPaytm Money\nCoin by Zerodha')
  const [keywords, setKeywords] = useState('trading tips\nbuy call\nsell call\nintraday jackpot\nguaranteed returns\nVIP group\nfree signals\nsure shot tips\n100% profit')
  
  // Scan state
  const [isScanning, setIsScanning] = useState(false)
  const [scanStep, setScanStep] = useState(0)
  const [error, setError] = useState(null)
  
  // Results state
  const [videos, setVideos] = useState([])
  const [stats, setStats] = useState({
    scanned: 0,
    fraudDetected: 0,
    brandsProtected: 0,
    reportsGenerated: 0,
  })
  
  // Export state
  const [isExporting, setIsExporting] = useState(false)

  const workflowSteps = [
    { step: 1, title: 'Search Videos', description: 'YouTube API scan', icon: SearchIcon },
    { step: 2, title: 'Fetch Captions', description: 'Extract transcripts', icon: FileIcon },
    { step: 3, title: 'Whisper AI', description: 'Coming soon', icon: MicIcon },
    { step: 4, title: 'Detect Fraud', description: 'AI signal detection', icon: AlertIcon },
    { step: 5, title: 'Export Report', description: 'Generate CSV', icon: DownloadIcon },
  ]

  const getStepStatus = (stepIndex) => {
    if (!isScanning && scanStep === 0) return 'pending'
    if (stepIndex < scanStep) return 'completed'
    if (stepIndex === scanStep && isScanning) return 'active'
    if (error && stepIndex === scanStep) return 'error'
    return 'pending'
  }

  const startScan = useCallback(async () => {
    setIsScanning(true)
    setError(null)
    setScanStep(0)
    setVideos([])
    
    const keywordList = keywords.split('\n').map(k => k.trim()).filter(k => k)
    const brandList = brands.split('\n').map(b => b.trim()).filter(b => b)
    
    if (keywordList.length === 0) {
      setError('Please enter at least one keyword to search')
      setIsScanning(false)
      return
    }
    
    try {
      // Step 1: Search YouTube
      setScanStep(0)
      const searchResponse = await fetch('/api/youtube/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords: keywordList }),
      })
      
      if (!searchResponse.ok) {
        const errorData = await searchResponse.json()
        throw new Error(errorData.error || 'Failed to search YouTube')
      }
      
      const searchData = await searchResponse.json()
      let fetchedVideos = searchData.videos || []
      
      if (fetchedVideos.length === 0) {
        setError('No videos found for the specified keywords')
        setIsScanning(false)
        setScanStep(0)
        return
      }
      
      // Step 2: Fetch Transcripts
      setScanStep(1)
      for (let i = 0; i < Math.min(fetchedVideos.length, 10); i++) {
        try {
          const transcriptResponse = await fetch('/api/youtube/transcript', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoId: fetchedVideos[i].id }),
          })
          
          if (transcriptResponse.ok) {
            const transcriptData = await transcriptResponse.json()
            fetchedVideos[i].transcript = transcriptData.transcript
            fetchedVideos[i].transcriptSource = transcriptData.source
          }
        } catch (transcriptError) {
          console.error('Transcript fetch error:', transcriptError)
        }
      }
      
        // Step 3: Whisper AI (future implementation - structure prepared)
        // When OPENAI_API_KEY is added in the future, this step will use
        // Whisper AI for audio transcription when YouTube captions are unavailable
      setScanStep(2)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Step 4: Analyze for fraud
      setScanStep(3)
      const analyzeResponse = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videos: fetchedVideos, brands: brandList }),
      })
      
      if (!analyzeResponse.ok) {
        const errorData = await analyzeResponse.json()
        throw new Error(errorData.error || 'Failed to analyze videos')
      }
      
      const analyzeData = await analyzeResponse.json()
      const analyzedVideos = analyzeData.videos || []
      
      // Step 5: Complete
      setScanStep(4)
      
      setVideos(analyzedVideos)
      setStats({
        scanned: analyzedVideos.length,
        fraudDetected: analyzeData.summary?.critical + analyzeData.summary?.high || 0,
        brandsProtected: brandList.length,
        reportsGenerated: stats.reportsGenerated,
      })
      
      await new Promise(resolve => setTimeout(resolve, 500))
      setScanStep(5)
      
    } catch (err) {
      console.error('Scan error:', err)
      setError(err.message || 'An error occurred during scanning')
    } finally {
      setIsScanning(false)
    }
  }, [keywords, brands, stats.reportsGenerated])

  const exportReport = useCallback(async (format) => {
    if (videos.length === 0) {
      setError('No data to export. Run a scan first.')
      return
    }
    
    setIsExporting(true)
    
    try {
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videos, format }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate export')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `fraud-detection-report-${Date.now()}.${format}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      setStats(prev => ({ ...prev, reportsGenerated: prev.reportsGenerated + 1 }))
      
    } catch (err) {
      console.error('Export error:', err)
      setError(err.message || 'Failed to export report')
    } finally {
      setIsExporting(false)
    }
  }, [videos])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-[1600px] mx-auto px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-gradient">Fraud Detection</span> Dashboard
          </h2>
          <p className="text-muted-foreground">
            Monitor YouTube content for fraudulent financial advice and brand impersonation
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6">
            <ErrorAlert message={error} onDismiss={() => setError(null)} />
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            label="Videos Scanned" 
            value={stats.scanned.toLocaleString()} 
            icon={PlayIcon}
            isLoading={isScanning && scanStep < 4}
          />
          <StatsCard 
            label="Fraud Detected" 
            value={stats.fraudDetected.toString()} 
            trend={stats.fraudDetected > 0 ? 8 : undefined}
            icon={AlertIcon}
            isLoading={isScanning && scanStep < 4}
          />
          <StatsCard 
            label="Brands Protected" 
            value={stats.brandsProtected.toString()} 
            icon={ShieldIcon}
          />
          <StatsCard 
            label="Reports Generated" 
            value={stats.reportsGenerated.toString()} 
            icon={FileIcon}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* API Configuration Note */}
          <div className="glass-card rounded-2xl p-6 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <KeyIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">API Configuration</h3>
                <p className="text-xs text-muted-foreground">Environment variables</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  <p className="text-sm font-medium text-emerald-400">Secure Configuration</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  API keys are securely stored as environment variables on the server. 
                  Add YOUTUBE_API_KEY in your Vercel project settings to enable YouTube search.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">YOUTUBE_API_KEY</span>
                  <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">Required</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">OPENAI_API_KEY</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded">Future (Whisper)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Monitoring */}
          <div className="glass-card rounded-2xl p-6 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <ShieldIcon className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Brand Monitoring</h3>
                <p className="text-xs text-muted-foreground">Brands to protect</p>
              </div>
            </div>

            <textarea
              value={brands}
              onChange={(e) => setBrands(e.target.value)}
              rows={8}
              placeholder="Enter brand names, one per line..."
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all resize-none font-mono text-sm leading-relaxed"
              disabled={isScanning}
            />
          </div>

          {/* Fraud Keywords */}
          <div className="glass-card rounded-2xl p-6 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <TagIcon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Search Keywords</h3>
                <p className="text-xs text-muted-foreground">YouTube search terms</p>
              </div>
            </div>

            <textarea
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              rows={8}
              placeholder="Enter keywords to search, one per line..."
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all resize-none font-mono text-sm leading-relaxed"
              disabled={isScanning}
            />
          </div>
        </div>

        {/* Workflow Pipeline */}
        <div className="glass-card rounded-2xl p-6 gradient-border mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Detection Pipeline</h3>
              <p className="text-sm text-muted-foreground">Automated fraud detection workflow</p>
            </div>
            <button
              onClick={startScan}
              disabled={isScanning}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                isScanning
                  ? 'bg-secondary text-muted-foreground cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 glow-cyan'
              }`}
            >
              {isScanning ? (
                <>
                  <LoaderIcon className="w-4 h-4" />
                  Scanning in Progress...
                </>
              ) : (
                <>
                  <SearchIcon className="w-4 h-4" />
                  Start Detection Scan
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => (
              <WorkflowStep
                key={step.step}
                {...step}
                status={getStepStatus(index)}
                isLast={index === workflowSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Detected Videos Table */}
        <div className="glass-card rounded-2xl p-6 gradient-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Detected Fraudulent Videos</h3>
              <p className="text-sm text-muted-foreground">
                {videos.length > 0 
                  ? `${videos.length} videos flagged for review based on fraud signals`
                  : 'Run a scan to detect fraudulent videos'
                }
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => exportReport('csv')}
                disabled={videos.length === 0 || isExporting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium text-sm hover:bg-cyan-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <DownloadIcon className="w-4 h-4" />
                Export CSV
              </button>
              <button 
                onClick={() => exportReport('xlsx')}
                disabled={videos.length === 0 || isExporting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium text-sm hover:bg-emerald-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <TableIcon className="w-4 h-4" />
                Export XLSX
              </button>
            </div>
          </div>

          {isScanning && scanStep < 4 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <LoaderIcon className="w-12 h-12 text-cyan-400 mb-4" />
              <p className="text-muted-foreground">Scanning YouTube for fraudulent content...</p>
            </div>
          ) : videos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <SearchIcon className="w-12 h-12 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground mb-2">No videos detected yet</p>
              <p className="text-sm text-muted-foreground/70">Click &quot;Start Detection Scan&quot; to begin monitoring</p>
            </div>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Video Title</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Channel</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Keyword</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Risk Level</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Detected Phrases</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Views</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Published</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {videos.map((video) => (
                    <tr key={video.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="py-4 px-4">
                        <p className="text-sm font-medium text-foreground truncate max-w-[250px]" title={video.title}>
                          {video.title}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-muted-foreground">{video.channel}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-secondary text-xs font-medium text-foreground">
                          {video.matchedKeyword}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <RiskBadge level={video.riskLevel} />
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {(video.detectedPhrases || []).slice(0, 3).map((p, i) => (
                            <PhraseBadge key={i} phrase={p.phrase} category={p.category} />
                          ))}
                          {(video.detectedPhrases || []).length > 3 && (
                            <span className="text-xs text-muted-foreground">+{video.detectedPhrases.length - 3} more</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-foreground font-medium">{formatViews(video.views)}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-muted-foreground">{formatDate(video.publishedAt)}</p>
                      </td>
                      <td className="py-4 px-4">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors inline-flex"
                        >
                          <ExternalLinkIcon className="w-4 h-4 text-muted-foreground hover:text-cyan-400" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* System Architecture */}
        <div className="glass-card rounded-2xl p-6 gradient-border mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">System Architecture</h3>
              <p className="text-xs text-muted-foreground">Data flow pipeline</p>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 border border-border overflow-x-auto">
            <pre className="font-mono text-sm text-emerald-400 leading-relaxed whitespace-pre">
{`┌─────────────────┐    ┌──────────────────┐    ┌────────────────────┐
│  Frontend       │───▶│  YouTube API     │───▶│  Transcript        │
│  Dashboard      │    │  Search Engine   │    │  Extraction        │
└─────────────────┘    └──────────────────┘    └────────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌────────────────────┐
│  CSV/XLSX       │◀───│  Fraud Signal    │◀───│  Whisper AI        │
│  Export         │    │  Detection       │    │  (Future)          │
│  Export         │    │  Detection       │    │  Audio Analysis    │
└─────────────────┘    └──────────────────┘    └────────────────────┘`}
            </pre>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              FraudShield Cyber Intelligence Platform
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by YouTube Data API and OpenAI GPT
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
