import React from 'react'
import GoalTextInput from './GoalTextInput'
import GoalExpectedTimeInput from './GoalExpectedTimeInput'
import AddGoalButton from './AddGoalButton'

class AddGoal extends React.Component {
  onAddGoal () {
    let addGoalForm = this.refs.addGoal
    let newGoal = {
      text: addGoalForm[0].value,
      expectedTime: Number(addGoalForm[1].value)
    }

    if (newGoal.text && typeof newGoal.text === 'string') {
      addGoalForm[0].className = addGoalForm[0].className.replace(' invalid-input', '')

      if (newGoal.expectedTime && typeof newGoal.expectedTime === 'number') {
        addGoalForm[1].className = addGoalForm[1].className.replace(' invalid-input', '')
        addGoalForm.reset()
        return this.props.onAddGoal(newGoal)
      } else if(!/(invalid-input)/.test(addGoalForm[1].className)) {
        addGoalForm[1].className += ' invalid-input'
      }
    } else if(!/(invalid-input)/.test(addGoalForm[0].className)) {

      addGoalForm[0].className += ' invalid-input'
    }
  }

  render () {
    return (
      <form className='AddGoal' ref='addGoal'>
        <GoalTextInput />
        <GoalExpectedTimeInput />
        <AddGoalButton onAddGoal={this.onAddGoal.bind(this)} />
      </form>
    )
  }
}

AddGoal.propTypes = {}

export default AddGoal
