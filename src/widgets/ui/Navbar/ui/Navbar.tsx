import {classNames} from 'shared/lib/classNames/classNames';
import React, {FC} from 'react';
import * as cls from './Navbar.module.scss'
import {AppLink, LinkTheme} from "shared/ui/AppLink";
import {ThemeSwitcher} from "widgets/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink
                    to={'/'}
                    className={classNames(cls.maineLink, {}, [])}
                    theme={LinkTheme.PRIMARY}
                >
                    Maine
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={LinkTheme.PRIMARY}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
};
