import Epic from './epic.js'
export default class Report {
  constructor(issues) {
    this.issues = issues
  }

  get epics() {
    const issuesByEpicKey = this.issues.reduce((prev, curr) => {
      prev[curr.epicKey] ||= []
      prev[curr.epicKey].push(curr)
      return prev
    }, {})

    return Object.keys(issuesByEpicKey).map(epicKey => {
      return new Epic(epicKey, issuesByEpicKey[epicKey])
    })
  }

  get filteredIssues() {
    return this.issues.filter(row => {
      return this.epics.includes(row.epicKey)
    })
  }
}
