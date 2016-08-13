import React from 'react'
import BodyText from './BodyText'

class GoalTextInput extends React.Component {
  render () {
    return (
      <div className='GoalTextInput'>
        <BodyText>What is the goal?</BodyText>
        <input className='GoalTextInput' type='text' placeholder='Enter Your Goal' />
      </div>
    )
  }
}

GoalTextInput.propTypes = {}

export default GoalTextInput
