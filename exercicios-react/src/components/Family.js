import React from 'react'

export default props => {
  const { children } = props
  return (
    /** Funciona para somente um componente filho */
    <ul>Family: {React.cloneElement(children, { ...props })}</ul>
  )
}
