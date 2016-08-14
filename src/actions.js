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

export function addGoal (text, expectedTime, completed = false) {
  return {
    type: ADD_GOAL,
    text,
    expectedTime,
    completed
  }
}

export function removeGoal (index) {
  return {
    type: REMOVE_GOAL,
    index
  }
}

export function toggleGoalCompletion (index) {
  return {
    type: TOGGLE_GOAL_COMPLETION,
    index
  }
}

export function updateGoal (text, expectedTime, completed) {
  return {
    type: UPDATE_GOAL,
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