import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ui/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/ui/LangSwitcher';
import * as cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { className, children } = props;
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Sidebar, { [cls.expanded]: open }, [className])}>
            {children}
            <div className={classNames(cls.c, {}, [])}>
                <Button
                    className={classNames(cls.button, {}, [])}
                    theme={ThemeButton.CLEAR}
                    onClick={() => setOpen((prevState) => !prevState)}
                >
                    {t('SHOW')}
                </Button>
                <div className={classNames(cls.bottom, {}, [])}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
