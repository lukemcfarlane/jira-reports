export default function issueFromCsvData(csvData) {
  return {
    key: csvData['Issue key'],
    summary: csvData['Summary'],
    status: csvData['Status'],
    epicKey: csvData['Custom field (Epic Link)'] || 'No epic',
    storyPoints: convertToNumber(csvData['Custom field (Story Points)']),
    timeSpent: convertToNumber(csvData['Time Spent'])
  }
}

function convertToNumber(str) {
  const num = Number(str)

  return isNaN(num) ? null : num
}
