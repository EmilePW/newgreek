import React from 'react'
import IoPlusCircled from 'react-icons/lib/io/plus-circled'

class AddGoalButton extends React.Component {
  render () {
    return (
      <button className='AddGoalButton' type='button'>
        <IoPlusCircled onClick={this.props.onAddGoal} size={20} />
      </button>
    )
  }
}

AddGoalButton.propTypes = {}

export default AddGoalButton
