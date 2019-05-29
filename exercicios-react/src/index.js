import React from 'react'
import ReactDOM from 'react-dom'

import Family from './components/Family'
import Child from './components/Child'

ReactDOM.render(
  <>
    <Family lastname="Queiroz">
      <Child name="William" />
      {/* <Child name="Willidi" />
      <Child name="Ellidiam" /> */}
    </Family>
    <Family lastname="Rodrigues">
      <Child name="Bianca" />
      {/* <Child name="Pedro" /> */}
    </Family>
  </>,
  document.getElementById('root')
)
