import {classNames} from 'shared/lib/classNames/classNames';
import React, {FC} from 'react';
import * as cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProviders";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {
                theme === Theme.DARK
                    ? <DarkIcon/>
                    : <LightIcon/>
            }
        </button>
    );
};
