import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo, removeTodo, completeTodo } from '../features/todo/todoSlice'

const Todo = ({todo}) => {
    const [input, setInput] = useState(todo.text)
    const [editable, setEditable] = useState(false)

    const dispatch = useDispatch()

    //edithandeler function 
    function editHandeler() {
        setEditable(prev => !prev)
        dispatch(editTodo({...todo, text:input}, todo.id))
    }
  return (
    <div>
        <input type='checkbox'
            value={todo.completed}
            onChange={() => dispatch(completeTodo(todo.id))}
        />
        <input type='text'
        value={input}
        onChange={(e) => (setInput(e.target.value))}
        readOnly={!editable}
        />
        <button onClick={editHandeler} disabled={todo.completed}>
            {
                editable ? "Done" : "Edit"
            }
        </button>
        <button onClick={() => dispatch(removeTodo(todo.id)) }>Delete</button>
    </div>
  )
}

export default Todo