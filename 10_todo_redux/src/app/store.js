import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//create store
export const store = configureStore({
    reducer: todoReducer
})