import React from 'react';
import {useAppSelector} from "../hook";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useAppSelector(state => state.todos.todos)
    return (
        <div>
            <h2 className="font-bold text-4xl text-center py-4">Список задач</h2>
            {
                todos?.map(todo => (
                    <TodoItem key={todo.id} id={todo.id} header={todo.header} text={todo.text} completed={todo.completed}/>
                ))
            }
        </div>
    );
};

export default TodoList;
