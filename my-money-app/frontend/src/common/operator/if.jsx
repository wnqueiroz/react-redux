import React from 'react'

export default ({ test, children }) => {
    if (test) return children
    return false
}