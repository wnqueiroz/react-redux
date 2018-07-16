import React, { Component } from 'react'
import { connect } from "react-redux"

class TabContent extends Component {
    render() {
        const { id, children, tab } = this.props

        return (
            <div id={id} className={`tab-pane ${tab.selected === id ? 'active' : ''}`}>
                {children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps)(TabContent)