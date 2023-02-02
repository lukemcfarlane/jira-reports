export default class Report {
  constructor(issues, { epics }) {
    this.epics = epics
    this.issues = issues
  }

  get filteredIssues() {
    return this.issues.filter(row => {
      return this.epics.includes(row.epicKey)
    })
  }
}
