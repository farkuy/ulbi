import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface IThemeContext {
    theme?: Theme;
    setTheme?: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});
