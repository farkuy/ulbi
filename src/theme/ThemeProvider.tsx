import React, {FC, useMemo, useState} from 'react';
import {Theme, ThemeContext} from "./ThemeContext";

const MAINE_THEME = localStorage.getItem('THEME_TEAM') as Theme|| Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(MAINE_THEME)

    const themeValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;