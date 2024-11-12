import { classNames } from 'shared/lib/classNames/classNames';
import React, {FC, useState} from 'react';
import * as cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ui/ThemeSwitcher";
import {Button} from "shared/ui/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { className, children } = props;
    const [open, setOpen] = useState(false);


    return (
        <div className={classNames(cls.Sidebar, {[cls.expanded]: open}, [className])}>
            {children}
            <div className={classNames(cls.c, {}, [])}>
                <ThemeSwitcher/>
                <Button onClick={() => setOpen(prevState => !prevState)}>show</Button>
            </div>
        </div>
    );
};
