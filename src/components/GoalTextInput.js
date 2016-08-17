import React from 'react'
import BodyText from './BodyText'

class GoalTextInput extends React.Component {
  render () {
    return (
      <div className='GoalTextInput'>
        <BodyText>Add A Goal</BodyText>
        <input type='text' placeholder='Enter Your Goal' />
      </div>
    )
  }
}

GoalTextInput.propTypes = {}

export default GoalTextInput
