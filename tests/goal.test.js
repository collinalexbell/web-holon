Goal = require('../goal')

test('goal constructor', () => {
  testStart = new Date()
  goal = new Goal("do homework")
  expect(goal.name).toBe("do homework")
  expect(goal.created.getTime()).toBeGreaterThanOrEqual(testStart.getTime())
  postGoalCreationTime = (new Date()).getTime()
  expect(goal.created.getTime()).toBeLessThanOrEqual(postGoalCreationTime)
  expect(goal.completed).toBe(false)
  expect(goal.description).toBe("")
})

test('goals can be saved and loaded by ID', () => {
  expectedGoals = Array(2)
  expectedGoals[0] = new Goal("do homework")
  expectedGoals[1] = new Goal("read")

  for(i = 0; i < expectedGoals.length; i++) {
    Goal.save(expectedGoals[i])
  }

  for(i = 0; i < expectedGoals.length; i++) {
    actualGoal = Goal.load(expectedGoals[i].id)
    expect(actualGoal.id).toBe(expectedGoals[i].id)
    expect(actualGoal.name).toBe(expectedGoals[i].name)
  }

})
