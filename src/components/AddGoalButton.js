import React from 'react'

class AddGoalButton extends React.Component {
  render () {
    return (
      <button onClick={this.props.onAddGoal} className='AddGoalButton' type='button'>+</button>
    )
  }
}

AddGoalButton.propTypes = {}

export default AddGoalButton
