import {useContext} from 'react';
import {Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void;
}

const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(nextTheme);
        localStorage.setItem('THEME_TEAM', nextTheme)
    }

    return {theme, toggleTheme} ;
};

export default useTheme;