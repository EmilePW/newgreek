import React, { PropTypes } from 'react'
import BodyText from './BodyText'
import CompletionCheck from './CompletionCheck'
import ExpectedTime from './ExpectedTime'

class Goal extends React.Component {
  render () {
    return (
      <div className='Goal'>
        {this.props.text} - 
        <ExpectedTime>{this.props.expectedTime}</ExpectedTime>
        <CompletionCheck completed={this.props.completed} />
      </div>
    )
  }
}

Goal.propTypes = {
  text: PropTypes.string.isRequired,
  expectedTime: PropTypes.number,
  completed: PropTypes.bool.isRequired
}

export default Goal
