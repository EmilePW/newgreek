import React, { PropTypes } from 'react'
import CompletionCheck from './CompletionCheck'
import GoalText from './GoalText'
import ExpectedTime from './ExpectedTime'

class Goal extends React.Component {
  onCompletionCheckClick () {
    return this.props.onCompletionCheckClick(this.props.id)
  }

  render () {
    let className = 'Goal'
    if (this.props.completed) {
      className += ' completed'
    }

    return (
      <div className={className}>
        <GoalText>{this.props.text}</GoalText>
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
