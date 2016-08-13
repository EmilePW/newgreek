import {
  ADD_GOAL,
  REMOVE_GOAL,
  TOGGLE_GOAL_COMPLETION,
  UPDATE_GOAL,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

import { combineReducers } from 'redux'

function goals (state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [
        ...state,
        {
          text: action.text,
          expectedTime: action.expectedTime,
          completed: action.completed
        }
      ]
    case REMOVE_GOAL:
      return state.filter((goal, index) => index !== action.index)
    case TOGGLE_GOAL_COMPLETION:
      return state.map((goal, index) => {
        if (index === action.index) {
          return Object.assign({}, goal, {
            completed: !goal.completed
          })
        } else {
          return goal
        }
      })
    case UPDATE_GOAL:
      return state.map((goal, index) => {
        if (index === action.index) {
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

function visibilityFilter (state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const goalsApp = combineReducers({
  goals,
  visibilityFilter
})

export default goalsApp
