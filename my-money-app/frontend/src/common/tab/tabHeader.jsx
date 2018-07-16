import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import { selectTab } from './tabActions'

class TabHeader extends Component {
    render() {
        const { target, icon, label, selectTab, tab } = this.props
        return (
            <li className={tab.selected === target ? 'active' : ''}>
                <a href='javascript:;'
                    data-toogle='tab'
                    data-target={target}
                    onClick={() => selectTab(target)}
                >
                    <i className={`fa fa-${icon}`}></i> {label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)