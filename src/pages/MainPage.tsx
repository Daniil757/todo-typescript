import React from 'react';
import TodoList from "../components/TodoList";
import FormAddTodo from "../components/FormAddTodo";

const MainPage = () => {
    return (
        <main className="max-w-[1024px] m-auto min-h-[calc(100vh-70px)] px-4 bg-gray-100">
            <FormAddTodo/>
            <TodoList/>
        </main>
    );
};

export default MainPage;
