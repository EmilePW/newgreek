let firstGoal = {
  id: 1,
  text: 'Run 10k',
  expectedTime: 2,
  completed: false
}

function goals (state = [firstGoal], action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return [
        ...state,
        {
          text: action.text,
          expectedTime: action.expectedTime,
          completed: action.completed
        }
      ]
    case 'REMOVE_GOAL':
      return state.filter((goal) => goal.id !== action.id)
    case 'TOGGLE_GOAL_COMPLETION':
      return state.map((goal) => {
        if (goal.id === action.id) {
          return Object.assign({}, goal, {
            completed: !goal.completed
          })
        } else {
          return goal
        }
      })
    case 'UPDATE_GOAL':
      return state.map((goal, index) => {
        if (goal.id === action.id) {
          return Object.assign({}, goal, {
            text: action.text,
            expectedTime: action.expectedTime
          })
        } else {
          return goal
        }
      })
    default:
      return state
  }
}

export default goals
