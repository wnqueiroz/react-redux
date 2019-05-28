import React from 'react'
import ReactDOM from 'react-dom'

import { CompA, CompB } from './components/TwoComponents'

ReactDOM.render(
  <>
    <CompA value="Hi! I'm A!" />
    <CompB value="Hi! I'm B!" />
  </>,
  document.getElementById('root')
)
