import React from 'react'

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
  children: React.PropTypes.string.isRequired
}

export default BodyText
