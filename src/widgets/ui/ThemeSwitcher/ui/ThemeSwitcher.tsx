import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProviders';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';
import * as cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.DARK
                    ? <DarkIcon />
                    : <LightIcon />
            }
        </Button>
    );
};
