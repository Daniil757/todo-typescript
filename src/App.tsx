import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CompletedPage from "./pages/CompletedPage";
import TodoPage from "./pages/TodoPage";
import Navigation from "./components/Navigation";

function App() {
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
