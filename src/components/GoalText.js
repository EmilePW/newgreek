import React, { PropTypes } from 'react'

class GoalText extends React.Component {
  render () {
    return (
      <div className='GoalText'>
        {this.props.children}
      </div>
    )
  }
}

GoalText.propTypes = {
  children: PropTypes.string.isRequired
}

export default GoalText
