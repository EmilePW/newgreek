import { connect } from 'react-redux'
import { addGoal } from '../actions'
import AddGoal from '../components/AddGoal'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGoal: (goal) => {
      dispatch(addGoal(goal))
    }
  }
}

const AddGoalSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGoal)

export default AddGoalSection
