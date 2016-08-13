import React from 'react'

class AddGoal extends React.Component {
  render () {
    return (
      <div className='AddGoal'>
        <GoalTextInput />
        <GoalExpectedTimeInput />
        <AddGoalButton />
      </div>
    )
  }
}

AddGoal.propTypes = {}

export default AddGoal
