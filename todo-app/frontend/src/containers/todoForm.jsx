import React from "react"
import { connect } from 'react-redux'
import TodoForm from '../todo/todoForm'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../todo/todoActions'

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ handleChange: changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
