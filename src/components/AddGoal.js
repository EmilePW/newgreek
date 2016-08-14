import React from 'react'
import GoalTextInput from './GoalTextInput'
import GoalExpectedTimeInput from './GoalExpectedTimeInput'
import AddGoalButton from './AddGoalButton'

class AddGoal extends React.Component {
  onAddGoal () {
    let newGoal = {
      text: this.refs.addGoal[0].value,
      expectedTime: Number(this.refs.addGoal[1].value)
    }

    if (newGoal.text && typeof newGoal.text === 'string') {
      this.refs.addGoal[0].className = this.refs.addGoal[0].className.replace(' invalid-input', '')

      if (newGoal.expectedTime && typeof newGoal.expectedTime === 'number') {
        this.refs.addGoal[1].className = this.refs.addGoal[1].className.replace(' invalid-input', '')
        this.refs.addGoal.reset()
        return this.props.onAddGoal(newGoal)
      } else {
        this.refs.addGoal[1].className += ' invalid-input'
      }
    } else {
      this.refs.addGoal[0].className += ' invalid-input'
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
