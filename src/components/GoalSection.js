import React, { PropTypes } from 'react'
import SectionTitle from './SectionTitle'
import GoalList from './GoalList'

class GoalSection extends React.Component {
  render () {
    return (
      <section className='GoalSection'>
        <SectionTitle>{this.props.title}</SectionTitle>
        <GoalList goals={this.props.goals} />
      </section>
    )
  }
}

GoalSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default GoalSection
