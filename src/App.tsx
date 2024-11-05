import React, {Suspense} from 'react';
import './styles/index.scss'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {MainePageLazy} from "./pages/MainePage/MainePageLazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Link to={'/'}>Maine</Link>
                <Link to={'/about'}>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainePageLazy />} />
                        <Route path="/about" element={<AboutPageLazy />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};

export default App;