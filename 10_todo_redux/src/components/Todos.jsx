import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'

const Todos = () => {
    const todos = useSelector(state => state.todos)
  return (
    <div>
    {
      todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
    }
    </div>
  )
}

export default Todos