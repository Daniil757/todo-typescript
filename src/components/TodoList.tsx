import React from 'react';
import {useAppSelector} from "../hook";
import TodoItem from "./TodoItem";

interface ListProps {
    todoCompleted: boolean
}

const TodoList: React.FC<ListProps> = ({todoCompleted}) => {
    const todos = useAppSelector(state => state.todos.todos)
    return (
        <div>
            <h2 className="font-bold text-4xl text-center py-4">Список {todoCompleted && 'выполненных'} задач</h2>
            <div className="flex flex-col gap-2">
                {
                    todos?.map(todo => (
                        todo.completed === todoCompleted && <TodoItem key={todo.id} id={todo.id} header={todo.header} text={todo.text} completed={todo.completed}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TodoList;
