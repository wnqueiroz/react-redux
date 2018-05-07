import React from "react"
import { connect } from 'react-redux'
import TodoForm from '../todo/todoForm'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from '../todo/todoActions'

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
    handleChange: changeDescription,
    search,
    add,
    clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
