import React, { PropTypes } from 'react'
import SectionTitle from './SectionTitle'
import SetGoalFilter from '../containers/SetGoalFilter'
import VisibleGoalList from '../containers/VisibleGoalList'
import AddGoalSection from '../containers/AddGoalSection'

class GoalSection extends React.Component {
  render () {
    return (
      <section className='GoalSection'>
        <SectionTitle>{this.props.title}</SectionTitle>
        <SetGoalFilter />
        <VisibleGoalList />
        <AddGoalSection />
      </section>
    )
  }
}

GoalSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default GoalSection
