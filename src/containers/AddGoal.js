import { connect } from 'react-redux'
import { addGoal } from '../actions'
import AddGoal from '../components/AddGoal'

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGoal: (goal) => {
      dispatch(addGoal(goal))
    }
  }
}

const AddGoal = connect(
  mapDispatchToProps
)(AddGoal)

export default AddGoal
