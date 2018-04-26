import React from 'react'
import { connect } from "react-redux"
import TodoList from '../todo/todoList'

const mapStateToProps = state => ({
    list: state.todo.list
})

export default connect(mapStateToProps)(TodoList)