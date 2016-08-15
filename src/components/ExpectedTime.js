import React, { PropTypes } from 'react'
import IoClock from 'react-icons/lib/io/clock'

class ExpectedTime extends React.Component {
  render () {
    return (
      <span className="ExpectedTime"><IoClock size={20} /> {this.props.children} hrs.</span>
    )
  }
}

ExpectedTime.propTypes = {
  children: PropTypes.number
}

export default ExpectedTime
