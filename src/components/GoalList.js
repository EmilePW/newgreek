import React, { PropTypes } from 'react'
import GoalListItem from './GoalListItem'
import Goal from './Goal'

class GoalList extends React.Component {
  render () {
    let goals = this.props.goals.map((goal) =>
      <GoalListItem key={goal.id}>
        <Goal text={goal.text} expectedTime={goal.expectedTime} completed={goal.completed} />
      </GoalListItem>)

    return (
      <ul className='GoalList'>
        {goals}
      </ul>
    )
  }
}

GoalList.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    expectedTime: PropTypes.number,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default GoalList
