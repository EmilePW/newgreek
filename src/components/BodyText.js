import React, { PropTypes } from 'react'

class BodyText extends React.Component {
  render () {
    return (
      <p className='BodyText'>
        {this.props.children}
      </p>
    )
  }
}

BodyText.propTypes = {
  children: PropTypes.string.isRequired
}

export default BodyText
