import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
