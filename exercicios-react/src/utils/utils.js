import React from 'react'

export const childrenWithProps = props => {
  const { children } = props
  return React.Children.map(children, child => React.cloneElement(child, props))
}
