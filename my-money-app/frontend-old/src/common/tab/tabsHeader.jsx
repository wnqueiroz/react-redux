import React from 'react'

const tabsHeader = ({ children }) => {
    return (
        <ul className="nav nav-tabs">
            {children}
        </ul>
    )
}

export default tabsHeader