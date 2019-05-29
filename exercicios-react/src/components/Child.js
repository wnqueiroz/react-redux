import React from 'react'

export default ({ notifyExit }) => (
  <div>
    <button type="button" onClick={() => notifyExit('Shopping')}>
      Vou sair
    </button>
  </div>
)
