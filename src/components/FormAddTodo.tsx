import React, {useState} from 'react';
import {useAppDispatch} from "../hook";
import {addTodo} from "../store/todoSlice";

const FormAddTodo = () => {
    const [todoHeader, setTodoHeader] = useState('');
    const [todoText, setTodoText] = useState('');

    const dispatch = useAppDispatch()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (todoHeader.trim().length !== 0 && todoText.trim().length !== 0) {
            dispatch(addTodo({
                header: todoHeader,
                text: todoText
            }))
            setTodoHeader('')
            setTodoText('')
        }
    }

    return (
        <form className="max-w-[760px] m-auto flex flex-col gap-3 pt-5">
            <h2 className="font-bold text-4xl text-center">Добавление задачи</h2>
            <div className="flex flex-col justify-start text-2xl gap-1">
                <label htmlFor="todoHeader">Заголовок задачи: <span className="text-red-600">*</span></label>
                <input
                    type="text"
                    id="todoHeader"
                    value={todoHeader}
                    onChange={(e) => setTodoHeader(e.target.value)}
                    className="border-2 border-blue-300 p-2 rounded-xl outline-none focus:shadow-md transition-all duration-200"
                />
            </div>
            <div className="flex flex-col justify-start text-2xl gap-1">
                <label htmlFor="todoText">Описание задачи: <span className="text-red-600">*</span></label>
                <textarea id="todoText"
                          value={todoText}
                          onChange={(e) => setTodoText(e.target.value)}
                          className="border-2 border-blue-300 p-1 rounded-xl outline-none focus:shadow-md transition-all duration-200 resize-none text-xl h-[95px]"
                />
            </div>
            <button
                type="submit"
                onClick={handleClick}
                className="bg-blue-400 w-[200px] py-2 rounded-md text-2xl text-white m-auto hover:bg-blue-600 hover:shadow-xl transition-all duration-150"
            >Добавить
            </button>
            <hr className="border-t-1 border-gray-400"/>
        </form>
    );
};

export default FormAddTodo;
