import {classNames} from 'shared/lib/classNames/classNames';
import React, {FC} from 'react';
import * as cls from './Navbar.module.scss'
import {AppLink, LinkTheme} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink
                    to={'/'}
                    className={classNames(cls.maineLink, {}, [])}
                    theme={LinkTheme.PRIMARY}
                >
                    {t("MAINE")}
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={LinkTheme.PRIMARY}
                >
                    {t("ABOUT_US")}
                </AppLink>
            </div>
        </div>
    );
};
