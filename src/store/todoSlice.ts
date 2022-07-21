import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
    initialState: {todos: [
            {
                id: 19237402374,
                header: 'Первая задача',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum laboriosam neque. Debitis ex illo laboriosam mollitia numquam officia optio?',
                completed: false
            }
        ]} as TodoState,
    reducers: {
        addTodo(state, action: PayloadAction<TodoAdd>) {
            const newTodo: Todo = {
                id: Date.now(),
                header: action.payload.header,
                text: action.payload.text,
                completed: false
            }
            state.todos.push(newTodo)
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeTodo(state, action: PayloadAction<number>) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload)
            if (toggleTodo) toggleTodo.completed = !toggleTodo.completed
        }
    }
})

// в компоненты
export const {addTodo, removeTodo, changeTodo} = todoSlice.actions

// в store
export default todoSlice.reducer