import React, { PropTypes } from 'react'

class GoalListItem extends React.Component {
  render () {
    return (
      <li className='GoalListItem'>
        {this.props.children}
      </li>
    )
  }
}

GoalListItem.propTypes = {
  children: PropTypes.element.isRequired
}

export default GoalListItem
