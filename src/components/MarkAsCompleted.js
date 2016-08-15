import React from 'react'
import IoCheckmarkRound from 'react-icons/lib/io/checkmark-round'

class MarkAsCompleted extends React.Component {
  render () {
    return (
      <span className='MarkAsCompleted'>
        <IoCheckmarkRound size={20} />
      </span>
    )
  }
}

MarkAsCompleted.propTypes = {}

export default MarkAsCompleted
