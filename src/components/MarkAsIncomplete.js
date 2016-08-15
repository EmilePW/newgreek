import React from 'react'
import IoCloseRound from 'react-icons/lib/io/close-round'

class MarkAsIncomplete extends React.Component {
  render () {
    return (
      <span className='MarkAsIncomplete'>
        <IoCloseRound size={20} />
      </span>
    )
  }
}

MarkAsIncomplete.propTypes = {}

export default MarkAsIncomplete
