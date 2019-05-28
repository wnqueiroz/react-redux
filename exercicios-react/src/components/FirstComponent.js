import React from 'react'

export default ({ value, isLegal }) => (
  <div>
    <h1>Hi! {value}</h1>
    <h2>{1 + 1}</h2>
    <p>{isLegal ? 'Sim' : 'Não'}</p>
  </div>
)
