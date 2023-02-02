import { sumBy } from './utils.js'

export default class Epic {
  constructor(key, issues) {
    this.key = key
    this.issues = issues
  }

  get totalStoryPoints() {
    return sumBy(this.issues, 'storyPoints')
  }

  get totalTimeSpent() {
    return sumBy(this.issues, 'timeSpent')
  }
}

