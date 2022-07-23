import React from 'react';
import TodoList from "../components/TodoList";

const CompletedPage = () => {
    return (
        <main className="max-w-[1024px] m-auto min-h-[calc(100vh-70px)] px-4 bg-gray-100">
            <TodoList todoCompleted={true}/>
        </main>
    );
};

export default CompletedPage;
