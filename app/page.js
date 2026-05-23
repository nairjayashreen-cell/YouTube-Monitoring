
'use client'

import { useState } from 'react'
import * as XLSX from 'xlsx'

export default function Home() {

  const [keywords, setKeywords] = useState(`trading tips
buy call
VIP group
guaranteed returns
telegram group`)

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  const runScan = async () => {

    try {

      setLoading(true)

      const response = await fetch('/api/youtube-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keywords: keywords
            .split('\n')
            .filter(k => k.trim())
        }),
      })

      const data = await response.json()

      setVideos(data.videos || [])

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)
    }
  }

  const exportExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(videos)

    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Videos'
    )

    XLSX.writeFile(
      workbook,
      'youtube-monitoring-report.xlsx'
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          YouTube Fraud Monitoring System
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Fraud Keywords
            </h2>

            <textarea
              rows={10}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full bg-black border border-slate-700 rounded-2xl p-4 mb-4"
            />

            <button
              onClick={runScan}
              className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-bold"
            >
              {loading
                ? 'Scanning...'
                : 'Start Detection Scan'}
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Monitoring Features
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✓ YouTube Search API</li>
              <li>✓ YouTube Shorts Detection</li>
              <li>✓ Fraud Risk Detection</li>
              <li>✓ XLSX Export</li>
              <li>✓ Vercel Ready</li>
            </ul>

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 overflow-x-auto">

          <div className="flex justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Detected Videos
            </h2>

            <button
              onClick={exportExcel}
              className="bg-emerald-500 text-black px-5 py-2 rounded-xl font-bold"
            >
              Export XLSX
            </button>

          </div>

          <table className="w-full min-w-[1000px]">

            <thead>

              <tr className="border-b border-slate-700 text-left">
                <th className="p-4">Title</th>
                <th className="p-4">Channel</th>
                <th className="p-4">Keyword</th>
                <th className="p-4">Type</th>
                <th className="p-4">Risk</th>
              </tr>

            </thead>

            <tbody>

              {videos.map((video, index) => (

                <tr
                  key={index}
                  className="border-b border-slate-800"
                >

                  <td className="p-4">
                    <a
                      href={video.url}
                      target="_blank"
                      className="text-cyan-400"
                    >
                      {video.title}
                    </a>
                  </td>

                  <td className="p-4">
                    {video.channel}
                  </td>

                  <td className="p-4">
                    {video.keyword}
                  </td>

                  <td className="p-4">

                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                      {video.type}
                    </span>

                  </td>

                  <td className="p-4">

                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full">
                      {video.risk}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  )
}
