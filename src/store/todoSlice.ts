import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const TODO_KEY = 'todos'

// тип одной задачи
export type Todo = {
    id: number,
    header: string,
    text: string,
    completed: boolean
}

// тип всех задач
type TodoState = {
    todos: Todo[]
}

//  todo АНАЛОГИЧАЯ ЗАПИСЬ ДЛЯ initialState в объекте
// const initialState: TodoState = {
//     todos: []
// }

type TodoAdd = {
    header: string,
    text: string
}

const todoSlice = createSlice({
    name: 'todo',
    // исходное состояние списка задач
    initialState: {todos: []} as TodoState,
    reducers: {
        addTodo(state, action: PayloadAction<TodoAdd>) {
            const newTodo: Todo = {
                id: Date.now(),
                header: action.payload.header,
                text: action.payload.text,
                completed: false
            }
            state.todos.unshift(newTodo)
            localStorage.setItem(TODO_KEY, JSON.stringify(state.todos))
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem(TODO_KEY, JSON.stringify(state.todos))
        },
        changeTodo(state, action: PayloadAction<number>) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload)
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
                localStorage.setItem(TODO_KEY, JSON.stringify(state.todos))
            }
        },
        setStateTodo(state, action: PayloadAction<Array<Todo>>) {
            state.todos = action.payload
        }
    }
})

// в компоненты
export const {addTodo, removeTodo, changeTodo, setStateTodo} = todoSlice.actions

// в store
export default todoSlice.reducer