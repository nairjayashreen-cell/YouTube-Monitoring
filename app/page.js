export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          YouTube Fraud Monitoring System
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <h2 className="text-2xl font-semibold mb-4">API Configuration</h2>

            <div className="space-y-4">
              <input
                type="password"
                placeholder="YouTube API Key"
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3"
              />

              <input
                type="password"
                placeholder="OpenAI API Key"
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3"
              />

              <select className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3">
                <option>Every 2 Days</option>
                <option>Daily</option>
                <option>Weekly</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <h2 className="text-2xl font-semibold mb-4">Brand Monitoring</h2>

            <textarea
              rows={8}
              defaultValue={`Zerodha\nGroww\nAngel One\nUpstox`}
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3"
            />
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Fraud & Ecosystem Keywords
          </h2>

          <textarea
            rows={12}
            defaultValue={`trading tips\nbuy call\nsell call\nintraday jackpot\nguaranteed returns\nVIP group`}
            className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {[
            'Search YouTube Videos',
            'Fetch Captions',
            'Run Whisper AI',
            'Detect Fraud Signals',
            'Generate Excel Report'
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900 rounded-3xl p-6 border border-slate-800"
            >
              <div className="text-cyan-400 text-sm mb-2">
                Monitoring Engine
              </div>

              <div className="font-semibold">{item}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Detected Videos</h2>

            <button className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold">
              Export CSV
            </button>
          </div>

          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="p-4">Video Title</th>
                <th className="p-4">Channel</th>
                <th className="p-4">Keyword</th>
                <th className="p-4">Risk Signal</th>
                <th className="p-4">Views</th>
                <th className="p-4">Published</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-slate-800">
                <td className="p-4">Guaranteed Profit Strategy</td>
                <td className="p-4">Trader Academy</td>
                <td className="p-4">guaranteed returns</td>
                <td className="p-4 text-red-400">VIP Group Funnel</td>
                <td className="p-4">120K</td>
                <td className="p-4">2 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-black rounded-3xl p-6 mt-8 border border-slate-800 text-green-400">
          <pre>{`Frontend Dashboard
↓
YouTube API Search
↓
Transcript Extraction
↓
Whisper AI
↓
Fraud Signal Detection
↓
CSV Export`}</pre>
        </div>
      </div>
    </main>
  )
}
