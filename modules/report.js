export default class Report {
  constructor(data, { epics }) {
    this.data = data
    this.epics = epics
  }

  get issues() {
    return this.data.filter(row => {
      return this.epics.includes(row['Custom field (Epic Link)'])
    })
  }
}
