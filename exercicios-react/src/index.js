import React from 'react'
import ReactDOM from 'react-dom'

import Family from './components/Family'
import Child from './components/Child'

ReactDOM.render(
  <>
    <Family>
      <Child name="William" lastname="Queiroz" />
      <Child name="Willidi" lastname="Queiroz" />
      <Child name="Ellidiam" lastname="Queiroz" />
    </Family>
    <Family>
      <Child name="Bianca" lastname="Rodrigues" />
      <Child name="Pedro" lastname="Rodrigues" />
    </Family>
  </>,
  document.getElementById('root')
)
