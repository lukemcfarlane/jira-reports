function renderEpic(epic) {
  const cols = ['Key', 'Summary', 'Status', 'Story Points', 'Time Spent']

  const containerDiv = document.createElement('div')

  const h2El = document.createElement('h2')
  h2El.textContent = epic.key
  containerDiv.appendChild(h2El)

  ;[
    `Total story points: ${epic.totalStoryPoints}`,
    `Remaining story points: ${epic.totalRemainingStoryPoints}`,
    `Total time spent: ${epic.totalTimeSpent}`,
  ].forEach(summaryText => {
    const summaryDiv = document.createElement('div')
    summaryDiv.textContent = summaryText
    containerDiv.appendChild(summaryDiv)
  })

  const tableEl = document.createElement('table')
  const tHeadEl = document.createElement('thead')

  const thEls = cols.map(col => {
    const thEl = document.createElement('th')
    thEl.textContent = col
    return thEl
  })

  thEls.forEach(thEl => tHeadEl.appendChild(thEl))
  tableEl.appendChild(tHeadEl)

  const tBodyEl = document.createElement('tbody')

  epic.issues.forEach(issue => {
    const trEl = document.createElement('tr')
    ;[
      issue.key,
      issue.summary,
      issue.status,
      issue.storyPoints,
      issue.timeSpent
    ].forEach(val => {
      const tdEl = document.createElement('td')
      tdEl.textContent = val
      trEl.appendChild(tdEl)
    })

    tBodyEl.appendChild(trEl)
  })

  tableEl.appendChild(tBodyEl)

  containerDiv.appendChild(tableEl)

  document.querySelector('body').appendChild(containerDiv)
}

export default function renderReport(report) {
  report.epics.forEach(renderEpic)
}


