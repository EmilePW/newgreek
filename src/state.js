import { createStore } from 'redux'
import goalsApp from './reducers'

import { addGoal, removeGoal, toggleGoalCompletion, updateGoal, setVisibilityFilter, VisibilityFilters } from './actions'

let store = createStore(goalsApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addGoal('Learn about actions', 3))
store.dispatch(addGoal('Learn about reducers', 2))
store.dispatch(addGoal('Learn to play the Ukulele', 30))
store.dispatch(removeGoal(1))
store.dispatch(toggleGoalCompletion(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()
