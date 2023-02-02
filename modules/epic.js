import { sumBy } from './utils.js'

export default class Epic {
  constructor(key, issues) {
    this.key = key
    this.issues = issues
  }

  get totalStoryPoints() {
    return sumBy(this.issues, 'storyPoints')
  }

  get totalRemainingStoryPoints() {
    const remainingIssues = this.issues.filter(issue => issue.status !== 'Done')
    return sumBy(remainingIssues, 'storyPoints')
  }

  get totalTimeSpent() {
    return sumBy(this.issues, 'timeSpent')
  }
}

