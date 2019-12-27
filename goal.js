var lastSaved

class Goal {
  constructor (name) {
    this.name = name
    this.id =
    this.description = ""
    this.created = new Date()
    this.completed = false
  }

  create (name) {
    goal = new Goal(name)
    goal.save()
    return goal
  }

  static save(goal) {
    lastSaved = goal
  }

  static load(id) {
    return lastSaved
  }
}

module.exports = Goal
