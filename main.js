import { parse } from 'csv-parse/sync'
import issueFromCsvData from './modules/issue-from-csv-data.js'
import Report from './modules/report.js'
import renderReport from './modules/render-report.js'

const epics = ['ESTE-17']

window.addEventListener("load", (event) => {
  const jiraDataFileInput = document.querySelector('#jira-data')
  jiraDataFileInput.addEventListener('change', async ({ target }) => {
    const file = target.files[0]
    const text = await file.text()
    const data = parse(text, { columns: true })
    const issues = data.map(issueFromCsvData)

    const report = new Report(issues, { epics })

    renderReport(report)
  })
})
