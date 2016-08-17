import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../actions'
import ListFilter from '../components/ListFilter'

const mapStateToProps = (state) => {
  return {
    currentFilter: state.filter,
    filters: VisibilityFilters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const SetGoalFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFilter)

export default SetGoalFilter
