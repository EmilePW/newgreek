import React from 'react'
import ReactDOM from 'react-dom'

import state from './state'

import App from './components/App'

require('./styles/main.scss')

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
