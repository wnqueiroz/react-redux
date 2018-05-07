import React from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../containers/todoForm'
import TodoList from '../containers/todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </div>
)