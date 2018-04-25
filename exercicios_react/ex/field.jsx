import React from 'react'
import { connect } from 'react-redux'

class Field extends React.Component {


    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.field.value
    }
}
// create decorator
export default connect(mapStateToProps)(Field)