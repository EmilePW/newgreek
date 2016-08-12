import {
  ADD_GOAL,
  REMOVE_GOAL,
  UPDATE_GOAL,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

import { combineReducers } from 'redux'

function goals (state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [
        ...state.goals,
        {
          text: action.text,
          expectedTime: action.expectedTime,
          completed: false
        }
      ]
    case REMOVE_GOAL:
      return state.goals.filter((goal, index) => index !== action.index)
    case UPDATE_GOAL:
      return state.goals.map((goal, index) => {
        if (index === action.index) {
          return Object.assign({}, goal, {
            text: action.text,
            expectedTime: action.expectedTime,
            completed: action.completed
          })
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
  visibilityFilter,
  goals
})

export default goalsApp
