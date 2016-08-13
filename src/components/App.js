import React from 'react'
import GoalSection from './GoalSection'

class App extends React.Component {
  render () {
    let goals = [
      {
        id: 1,
        text: 'Read Proust',
        expectedTime: 100,
        completed: false
      },
      {
        id: 2,
        text: 'Finish Redux Docs',
        expectedTime: 5,
        completed: false
      }
    ]

    return (
      <div className='App'>
        <GoalSection title='Six Month Goals' goals={goals} />
      </div>
    )
  }
}

App.propTypes = {}

export default App
