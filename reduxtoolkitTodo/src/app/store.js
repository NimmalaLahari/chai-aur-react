import {configureStore} from '@reduxjs/toolkit'
//provide the knowledge of reducers
import todoReducer from '../features/todo/todoSlice'

export const store=configureStore({
    reducer: todoReducer
})