import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'
import { selectTab } from './tabActions'

class TabHeader extends Component {
  render() {
    const { target, icon, label, selectTab, tab } = this.props
    const visible = tab.visible[target]
    return (
      <If test={visible}>
        <li className={tab.selected === target ? 'active' : ''}>
          <a
            data-toogle="tab"
            data-target={target}
            onClick={() => selectTab(target)}
          >
            <i className={`fa fa-${icon}`} /> {label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectTab
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabHeader)
