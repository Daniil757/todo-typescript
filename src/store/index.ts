import {configureStore} from "@reduxjs/toolkit";
import TodoReducer from './todoSlice'

// создаём хранилище
const store = configureStore({
    reducer: {
        todos: TodoReducer
    }
})

// экспортируем store
export default store

// выводим типы для создания своих хуков
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch