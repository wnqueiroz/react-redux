import React from 'react'

export default () => {
  const approved = ['Paula', 'Roberta', 'Gustavo', 'Julia']

  const assembleItems = items => items.map(item => <li>{item}</li>)

  return <ul>{assembleItems(approved)}</ul>
}
