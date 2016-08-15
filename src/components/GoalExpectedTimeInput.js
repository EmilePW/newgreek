import React from 'react'
import BodyText from './BodyText'
import IoClock from 'react-icons/lib/io/clock'

class GoalExpectedTimeInput extends React.Component {
  render () {
    return (
      <div className='GoalExpectedTimeInput'>
        <p><IoClock size={20} /> (hours)</p>
        <input type='text' />
      </div>
    )
  }
}

GoalExpectedTimeInput.propTypes = {}

export default GoalExpectedTimeInput
