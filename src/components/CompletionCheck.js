import React from 'react'
import MarkAsCompleted from './MarkAsCompleted'
import MarkAsIncomplete from './MarkAsIncomplete'

class CompletionCheck extends React.Component {
  render () {
    return (
      <button className='CompletionCheck'>
        {this.props.completed ? <MarkAsIncomplete /> : <MarkAsCompleted />}
      </button>
    )
  }
}

CompletionCheck.propTypes = {}

export default CompletionCheck
