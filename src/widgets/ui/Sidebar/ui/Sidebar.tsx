import { classNames } from 'shared/lib/classNames/classNames';
import React, {FC, useState} from 'react';
import * as cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ui/ThemeSwitcher";
import {Button} from "shared/ui/Button";
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const {t} = useTranslation()
    const { className, children } = props;
    const [open, setOpen] = useState(false);

    return (
        <div className={classNames(cls.Sidebar, {[cls.expanded]: open}, [className])}>
            {children}
            <div className={classNames(cls.c, {}, [])}>
                <ThemeSwitcher/>
                <Button onClick={() => setOpen(prevState => !prevState)}>{t("SHOW")}</Button>
            </div>
        </div>
    );
};
