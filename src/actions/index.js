/*
 * Action Types
 */

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'
export const TOGGLE_GOAL_COMPLETION = 'TOGGLE_GOAL_COMPLETION'
export const UPDATE_GOAL = 'UPDATE_GOAL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * Other Constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS'
}

/*
 * Action Creators
 */

export function addGoal (goal) {
  return {
    type: ADD_GOAL,
    id: Math.round(Math.random() * 10000),
    text: goal.text,
    expectedTime: goal.expectedTime,
    completed: false
  }
}

export function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export function toggleGoalCompletion (id) {
  return {
    type: TOGGLE_GOAL_COMPLETION,
    id
  }
}

export function updateGoal (id, text, expectedTime, completed) {
  return {
    type: UPDATE_GOAL,
    id,
    text,
    expectedTime,
    completed 
  }
}

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
