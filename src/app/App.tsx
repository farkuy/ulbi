import React from 'react';
import './styles/index.scss'
import {BrowserRouter as Router, Link} from "react-router-dom";
import useTheme from "./providers/ThemeProviders/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "./router/ui/AppRouter";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', { hovered: true, disabled: false }, [theme])}>
            <button onClick={toggleTheme}>клик</button>
            <Router>
                <Link to={'/'}>Maine</Link>
                <Link to={'/about'}>About</Link>
                <AppRouter/>
            </Router>
        </div>
    );
};

export default App;