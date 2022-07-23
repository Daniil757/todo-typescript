import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CompletedPage from "./pages/CompletedPage";
import TodoPage from "./pages/TodoPage";
import Navigation from "./components/Navigation";
import {useAppDispatch} from "./hook";
import {setStateTodo, TODO_KEY} from "./store/todoSlice";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (localStorage.getItem(TODO_KEY) !== null) {
            dispatch(setStateTodo(JSON.parse(localStorage.getItem(TODO_KEY) || '[]')))
        }
    }, []);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/completed" element={<CompletedPage/>}/>
                <Route path="/todos/:id" element={<TodoPage/>}/>
            </Routes>
        </>
    );
}

export default App;
