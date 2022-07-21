import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <header className="h-[70px] bg-blue-600 shadow-md m-auto">
            <div className="flex justify-between items-center max-w-[1024px] px-4 h-full m-auto">
                <h2>#СписокЗадач</h2>

                <nav className="flex gap-3 text-white font-bolder text-lg">
                    <Link to="/" className="hover:text-blue-300 transition-all duration-150">Главная</Link>
                    <Link to="/completed" className="hover:text-blue-300 transition-all duration-150">Выполненные задачи</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
