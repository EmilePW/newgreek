import React from 'react'
import BodyText from './BodyText'

class GoalExpectedTimeInput extends React.Component {
  render () {
    return (
      <div className='GoalExpectedTimeInput'>
        <BodyText>Expected Time (hours)</BodyText>
        <input type='number' />
      </div>
    )
  }
}

GoalExpectedTimeInput.propTypes = {}

export default GoalExpectedTimeInput
