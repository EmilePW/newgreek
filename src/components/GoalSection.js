import React, { PropTypes } from 'react'
import SectionTitle from './SectionTitle'
import VisibleGoalList from '../containers/VisibleGoalList'

class GoalSection extends React.Component {
  render () {
    return (
      <section className='GoalSection'>
        <SectionTitle>{this.props.title}</SectionTitle>
        <VisibleGoalList />
      </section>
    )
  }
}

GoalSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default GoalSection
