import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandeler = () => {
        if (!input) return 
        dispatch(
            addTodo(input)
        )
        setInput("")
    }
  return (
    <div className='bg-slate-600'>
        <input type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodoHandeler}>
            Add Todo 
        </button>
    </div>
  )
}

export default AddTodo