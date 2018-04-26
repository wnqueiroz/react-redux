import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.field.value
    }
}

const mapDispacthToProps = (dispatch) => {
    return bindActionCreators({ changeValue }, dispatch)
}
// create decorator
export default connect(mapStateToProps, mapDispacthToProps)(Field)