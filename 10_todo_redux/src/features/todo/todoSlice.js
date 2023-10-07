import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state of store
const initialState = {
    todos : [
        {
            id: 1,
            text: ""
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //state refers to current state
        //action refers to values
        addTodo : (state, action) => {
            const todo = {
                //nano id gives random id
                id : nanoid(),
                //payload is a object
                text: action.payload
            }
            //push value to initialstate todo array
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

