import React from "react"
import {connect} from 'react-redux'
import TodoForm from '../todo/todoForm'

const mapStateToProps = state => ({
    description: state.todo.description
})

export default connect(mapStateToProps)(TodoForm)
