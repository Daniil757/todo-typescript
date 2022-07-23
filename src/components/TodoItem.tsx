import React, {useState} from 'react';
import type {Todo} from '../store/todoSlice'
import {useAppDispatch} from "../hook";
import {changeTodo, removeTodo} from "../store/todoSlice";
import clsx from "clsx";

const TodoItem: React.FC<Todo> = ({id, header, text, completed}) => {
    const dispatch = useAppDispatch()
    const [view, setView] = useState<boolean>(true)
    return (
        <div className="bg-white rounded-md p-2 flex justify-between items-center gap-2">
            <div className="overflow-hidden">
                <h3 className="text-2xl font-bold">{header}</h3>
                <p
                    className={clsx({
                        "h-[30px] text-ellipsis overflow-hidden whitespace-nowrap": view,
                        "break-words min-h-[30px] max-w-[900px]": !view
                    })}
                    onClick={() => setView(!view)}
                >{text}
                </p>
            </div>
            <div className="flex justify-center items-start gap-2">
                <input type="checkbox" checked={completed} onChange={() => dispatch(changeTodo(id))}
                       className="cursor-pointer w-[20px] h-[20px]"
                />
                <span onClick={() => dispatch(removeTodo(id))}
                      className="cursor-pointer w-[20px] h-[20px] text-4xl flex items-center justify-center box-border pb-2"
                >&times;</span>
            </div>
        </div>
    );
};

export default TodoItem;
