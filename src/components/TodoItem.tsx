import React from 'react';
import type {Todo} from '../store/todoSlice'
import {useAppDispatch} from "../hook";
import {changeTodo} from "../store/todoSlice";

const TodoItem:React.FC<Todo> = ({id, header, text, completed}) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <h3 className="text-2xl font-bold">{header}</h3>
            <p>{text}</p>
            <input type="checkbox" checked={completed} onChange={() => dispatch(changeTodo(id))}/>
        </div>
    );
};

export default TodoItem;
