Goal = require('../goal')

test('goal constructor', () => {
  testStart = new Date()
  goal = new Goal("do homework")
  expect(goal.name).toBe("do homework")
  expect(goal.created.getTime()).toBeGreaterThanOrEqual(testStart.getTime())
  expect(goal.created.getTime()).toBeLessThanOrEqual(testStart.getTime())
  expect(goal.completed).toBe(false)
  expect(goal.description).toBe("")
})

test('goal can be saved and loaded by ID', () => {
  expectedGoal = new Goal("do homework")
  Goal.save(expectedGoal)
  actualGoal = Goal.load(goal.id)
  expect(actualGoal.name).toBe(expectedGoal.name)
  expect(actualGoal.id).toBe(expectedGoal.id)
})
