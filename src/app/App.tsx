import React from 'react';
import './styles/index.scss'
import {BrowserRouter as Router} from "react-router-dom";
import useTheme from "./providers/ThemeProviders/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "./router/ui/AppRouter";
import {Navbar} from "widgets/ui/Navbar";
import {Sidebar} from "widgets/ui/Sidebar";
import "./providers/Translate/i18n"

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', { hovered: true, disabled: false }, [theme])}>
            <Router>
                <Navbar/>
                <div className='core'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Router>
        </div>
    );
};

export default App;