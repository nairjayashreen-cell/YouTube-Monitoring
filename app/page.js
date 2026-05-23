'use client'

import { useState } from 'react'

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
function StatsCard({ label, value, trend, icon: Icon }) {
  return (
    <div className="glass-card rounded-2xl p-5 gradient-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {trend && (
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
function WorkflowStep({ step, title, description, icon: Icon, isActive, isLast }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${
        isActive 
          ? 'bg-gradient-to-br from-cyan-500 to-violet-500 glow-cyan' 
          : 'bg-secondary border border-border'
      }`}>
        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
        <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-background border border-border flex items-center justify-center text-xs font-medium text-muted-foreground">
          {step}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{title}</p>
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
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  )
}

// Sample data for the table
const sampleVideos = [
  {
    id: 1,
    title: 'Guaranteed 500% Returns in 7 Days - Join VIP Now!',
    channel: 'Profit Guru Academy',
    keyword: 'guaranteed returns',
    riskLevel: 'critical',
    riskSignal: 'VIP Group Funnel + False Promises',
    views: '245K',
    published: '2 days ago',
  },
  {
    id: 2,
    title: 'Secret Trading Strategy Banks Use - Leaked',
    channel: 'Insider Trading Tips',
    keyword: 'trading tips',
    riskLevel: 'high',
    riskSignal: 'Misleading Claims',
    views: '189K',
    published: '4 days ago',
  },
  {
    id: 3,
    title: 'Zerodha Premium Signals - Daily Intraday Calls',
    channel: 'Market Masters',
    keyword: 'intraday jackpot',
    riskLevel: 'critical',
    riskSignal: 'Brand Impersonation',
    views: '78K',
    published: '1 week ago',
  },
  {
    id: 4,
    title: 'How I Made 10 Lakhs in One Month Trading',
    channel: 'Finance Freedom',
    keyword: 'guaranteed returns',
    riskLevel: 'medium',
    riskSignal: 'Unrealistic Expectations',
    views: '156K',
    published: '3 days ago',
  },
  {
    id: 5,
    title: 'Join Our Telegram for Free Stock Tips',
    channel: 'Stock Alert Pro',
    keyword: 'VIP group',
    riskLevel: 'high',
    riskSignal: 'Lead Generation Funnel',
    views: '92K',
    published: '5 days ago',
  },
]

export default function Home() {
  const [youtubeApiKey, setYoutubeApiKey] = useState('')
  const [openaiApiKey, setOpenaiApiKey] = useState('')
  const [scanFrequency, setScanFrequency] = useState('Every 2 Days')
  const [brands, setBrands] = useState('Zerodha\nGroww\nAngel One\nUpstox\nPaytm Money\nCoin by Zerodha')
  const [keywords, setKeywords] = useState('trading tips\nbuy call\nsell call\nintraday jackpot\nguaranteed returns\nVIP group\nfree signals\nsure shot tips\n100% profit')
  const [isScanning, setIsScanning] = useState(false)

  const workflowSteps = [
    { step: 1, title: 'Search Videos', description: 'YouTube API scan', icon: SearchIcon, isActive: true },
    { step: 2, title: 'Fetch Captions', description: 'Extract transcripts', icon: FileIcon, isActive: false },
    { step: 3, title: 'Whisper AI', description: 'Audio analysis', icon: MicIcon, isActive: false },
    { step: 4, title: 'Detect Fraud', description: 'AI signal detection', icon: AlertIcon, isActive: false },
    { step: 5, title: 'Export Report', description: 'Generate CSV', icon: DownloadIcon, isActive: false },
  ]

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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard label="Videos Scanned" value="12,847" trend={12} icon={PlayIcon} />
          <StatsCard label="Fraud Detected" value="234" trend={8} icon={AlertIcon} />
          <StatsCard label="Brands Protected" value="6" icon={ShieldIcon} />
          <StatsCard label="Reports Generated" value="47" icon={FileIcon} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* API Configuration */}
          <div className="glass-card rounded-2xl p-6 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <KeyIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">API Configuration</h3>
                <p className="text-xs text-muted-foreground">Connect your API keys</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">YouTube Data API</label>
                <input
                  type="password"
                  value={youtubeApiKey}
                  onChange={(e) => setYoutubeApiKey(e.target.value)}
                  placeholder="Enter your YouTube API key"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">OpenAI API</label>
                <input
                  type="password"
                  value={openaiApiKey}
                  onChange={(e) => setOpenaiApiKey(e.target.value)}
                  placeholder="Enter your OpenAI API key"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Scan Frequency</label>
                <select
                  value={scanFrequency}
                  onChange={(e) => setScanFrequency(e.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="Daily">Daily</option>
                  <option value="Every 2 Days">Every 2 Days</option>
                  <option value="Weekly">Weekly</option>
                </select>
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
            />
          </div>

          {/* Fraud Keywords */}
          <div className="glass-card rounded-2xl p-6 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <TagIcon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Fraud Keywords</h3>
                <p className="text-xs text-muted-foreground">Detection triggers</p>
              </div>
            </div>

            <textarea
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              rows={8}
              placeholder="Enter keywords to detect, one per line..."
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all resize-none font-mono text-sm leading-relaxed"
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
              onClick={() => setIsScanning(!isScanning)}
              disabled={isScanning}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                isScanning
                  ? 'bg-secondary text-muted-foreground cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 glow-cyan'
              }`}
            >
              {isScanning ? 'Scanning in Progress...' : 'Start Detection Scan'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => (
              <WorkflowStep
                key={step.step}
                {...step}
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
              <p className="text-sm text-muted-foreground">Videos flagged for review based on fraud signals</p>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium text-sm hover:bg-cyan-500/20 transition-colors">
              <DownloadIcon className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Video Title</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Channel</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Keyword</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Risk Level</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Risk Signal</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Views</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Published</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleVideos.map((video) => (
                  <tr key={video.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4">
                      <p className="text-sm font-medium text-foreground truncate max-w-[250px]">{video.title}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-muted-foreground">{video.channel}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-secondary text-xs font-medium text-foreground">
                        {video.keyword}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <RiskBadge level={video.riskLevel} />
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-muted-foreground">{video.riskSignal}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-foreground font-medium">{video.views}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-muted-foreground">{video.published}</p>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ExternalLinkIcon className="w-4 h-4 text-muted-foreground hover:text-cyan-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
│  CSV Report     │◀───│  Fraud Signal    │◀───│  Whisper AI        │
│  Export         │    │  Detection (GPT) │    │  Audio Analysis    │
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
