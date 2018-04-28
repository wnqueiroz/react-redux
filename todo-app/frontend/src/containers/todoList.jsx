import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import TodoList from '../todo/todoList'
import { markAsDone, markAsPending, remove } from '../todo/todoActions'

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)