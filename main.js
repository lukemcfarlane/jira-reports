import handleCsvFileUpload from './modules/handle-csv-file-upload.js'

window.addEventListener("load", (event) => {
  const jiraDataFileInput = document.querySelector('#jira-data')
  jiraDataFileInput.addEventListener('change', handleCsvFileUpload)
})
