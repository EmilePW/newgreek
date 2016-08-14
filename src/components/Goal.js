import React, { PropTypes } from 'react'
import BodyText from './BodyText'
import CompletionCheck from './CompletionCheck'
import ExpectedTime from './ExpectedTime'

class Goal extends React.Component {
  onCompletionCheckClick () {
    return this.props.onCompletionCheckClick(this.props.id)
  }

  render () {
    return (
      <div className='Goal'>
        {this.props.text} - 
        <ExpectedTime>{this.props.expectedTime}</ExpectedTime>
        <CompletionCheck completed={this.props.completed} onCompletionCheckClick={this.onCompletionCheckClick.bind(this)} />
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