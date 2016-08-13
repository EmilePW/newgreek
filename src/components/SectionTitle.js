import React, { PropTypes } from 'react'

class SectionTitle extends React.Component {
  render () {
    return (
      <h2 className='SectionTitle'>{this.props.children}</h2>
    )
  }
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default SectionTitle
