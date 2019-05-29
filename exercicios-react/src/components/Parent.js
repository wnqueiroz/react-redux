import React from 'react'
import Child from './Child'

export default () => {
  // eslint-disable-next-line no-alert, no-undef
  const notifyExit = place => alert(`Liberado para ${place}`)

  return (
    <div>
      <Child notifyExit={notifyExit} />
    </div>
  )
}
