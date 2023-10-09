import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state of store
const initialState = {
    todos : [
        //empty array
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //state refers to current state
        //action refers to values

        //todo msg as parameter
        addTodo : (state, action) => {
            const todo = {
                //nano id gives random id
                id : nanoid(),
                //payload is a object
                text: action.payload,
                //complete
                completed : false
            }
            //push value to initialstate todo array
            state.todos.splice(0,0,todo)
        },

        //todo id as parameter
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        //todo id and new todo msg as parameter
        editTodo : (state, action) => {
           const {text, id} = action.payload
           state.todos = state.todos.map((todo) =>
            todo.id === id ? {...action.payload, text}: todo 
           )
        },

        //todo id as paramter
        completeTodo : (state, action) => {
            state.todos = state.todos.map((todo) => 
            todo.id === action.payload ? {...todo, completed : !todo.completed}: todo
            )
        }
    }
})

export const {addTodo, removeTodo, editTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer

