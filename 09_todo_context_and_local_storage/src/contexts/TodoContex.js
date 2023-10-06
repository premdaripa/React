import { createContext, useContext } from "react";

//crete context
export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo: "msg",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

//provider
export const TodoContextProvider = TodoContext.Provider 

//custom hook
export const useTodo = () => {
    return useContext(TodoContext);
}