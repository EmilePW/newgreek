import React, { PropTypes } from 'react'
import BodyText from './BodyText'

class ExpectedTime extends React.Component {
  render () {
    return (
      <span className="ExpectedTime">{this.props.children} hrs.</span>
    )
  }
}

ExpectedTime.propTypes = {
  children: PropTypes.number
}

export default ExpectedTime
