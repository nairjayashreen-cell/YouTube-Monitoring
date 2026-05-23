// Export API Route
// Generates CSV and XLSX reports

import * as XLSX from 'xlsx'

export async function POST(request) {
  try {
    const { videos, format = 'csv' } = await request.json()
    
    if (!videos || !Array.isArray(videos)) {
      return Response.json(
        { error: 'Videos array is required' },
        { status: 400 }
      )
    }
    
    // Prepare data for export
    const exportData = videos.map((video, index) => ({
      'S.No': index + 1,
      'Video Title': video.title || '',
      'Channel Name': video.channel || '',
      'Channel URL': video.channelId ? `https://www.youtube.com/channel/${video.channelId}` : '',
      'Video URL': video.url || '',
      'Matched Keyword': video.matchedKeyword || '',
      'Risk Level': (video.riskLevel || 'low').toUpperCase(),
      'Risk Score': video.riskScore || 0,
      'Risk Signal': video.riskSignal || '',
      'Detected Phrases': (video.detectedPhrases || []).map(p => p.phrase).join(', '),
      'Brand Impersonation': (video.brandImpersonation || []).join(', '),
      'Views': video.views || 0,
      'Likes': video.likes || 0,
      'Comments': video.commentCount || 0,
      'Published Date': video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : '',
      'Analyzed Date': video.analyzedAt ? new Date(video.analyzedAt).toLocaleDateString() : new Date().toLocaleDateString(),
      'Transcript Available': video.transcript ? 'Yes' : 'No',
    }))
    
    if (format === 'xlsx') {
      // Generate XLSX
      const worksheet = XLSX.utils.json_to_sheet(exportData)
      
      // Set column widths
      const columnWidths = [
        { wch: 5 },   // S.No
        { wch: 50 },  // Video Title
        { wch: 25 },  // Channel Name
        { wch: 45 },  // Channel URL
        { wch: 45 },  // Video URL
        { wch: 20 },  // Matched Keyword
        { wch: 12 },  // Risk Level
        { wch: 10 },  // Risk Score
        { wch: 30 },  // Risk Signal
        { wch: 40 },  // Detected Phrases
        { wch: 25 },  // Brand Impersonation
        { wch: 12 },  // Views
        { wch: 10 },  // Likes
        { wch: 10 },  // Comments
        { wch: 15 },  // Published Date
        { wch: 15 },  // Analyzed Date
        { wch: 18 },  // Transcript Available
      ]
      worksheet['!cols'] = columnWidths
      
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Fraud Detection Report')
      
      // Add summary sheet
      const summaryData = [
        { 'Metric': 'Total Videos Analyzed', 'Value': videos.length },
        { 'Metric': 'Critical Risk', 'Value': videos.filter(v => v.riskLevel === 'critical').length },
        { 'Metric': 'High Risk', 'Value': videos.filter(v => v.riskLevel === 'high').length },
        { 'Metric': 'Medium Risk', 'Value': videos.filter(v => v.riskLevel === 'medium').length },
        { 'Metric': 'Low Risk', 'Value': videos.filter(v => v.riskLevel === 'low').length },
        { 'Metric': 'Report Generated', 'Value': new Date().toLocaleString() },
      ]
      const summarySheet = XLSX.utils.json_to_sheet(summaryData)
      summarySheet['!cols'] = [{ wch: 25 }, { wch: 30 }]
      XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary')
      
      // Generate buffer
      const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
      
      return new Response(buffer, {
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': `attachment; filename="fraud-detection-report-${Date.now()}.xlsx"`,
        },
      })
      
    } else {
      // Generate CSV
      const headers = Object.keys(exportData[0] || {})
      const csvRows = [
        headers.join(','),
        ...exportData.map(row => 
          headers.map(header => {
            const value = row[header]
            // Escape commas and quotes in values
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
              return `"${value.replace(/"/g, '""')}"`
            }
            return value
          }).join(',')
        )
      ]
      
      const csvContent = csvRows.join('\n')
      
      return new Response(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="fraud-detection-report-${Date.now()}.csv"`,
        },
      })
    }
    
  } catch (error) {
    console.error('Export error:', error)
    return Response.json(
      { error: 'Failed to generate export' },
      { status: 500 }
    )
  }
}
