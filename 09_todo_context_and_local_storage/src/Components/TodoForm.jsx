import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [inputTodo, setInputTodo] = useState("")
    const {addTodo} = useTodo()

    function addTodoHandeler(e) {
        e.preventDefault()

        //if todo is empty then simply return
        if (!inputTodo) return

        //todo is present
        //passing obj because addTodo structure (app.jsx)
        addTodo({ todo: inputTodo, completed: false})
        setInputTodo("")
    }

    return (
        <form onSubmit={addTodoHandeler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                //wireing value with todo
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
            />
            <button type="submit" 
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

