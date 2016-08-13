import { connect } from 'react-redux'
import { toggleGoalCompletion } from '../actions'
import GoalList from './GoalList'

// container component

const getVisibleGoals = (goals, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return goals
    case 'SHOW_COMPLETED':
      return todos.filter(goal => goal.completed)
    case 'SHOW_IN_PROGRESS':
      return goals.filter(goal => !goal.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    goals: getVisibleGoals(state.goals, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCompletionCheckClick: (id) => {
      dispatch(toggleGoalCompletion(id))
    }
  }
}

const VisibleGoalList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalList)

export default VisibleGoalList
