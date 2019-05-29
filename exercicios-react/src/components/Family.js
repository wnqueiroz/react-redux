import React from 'react'

import { childrenWithProps } from '../utils/utils'

export default props => (
  <ul>
    Family:
    {childrenWithProps(props)}
  </ul>
)
