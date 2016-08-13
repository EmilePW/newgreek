import { combineReducers } from 'redux'
import goals from './goals'
import visibilityFilter from './visibilityFilter'

const goalsApp = combineReducers({
  goals,
  visibilityFilter
})

export default goalsApp
