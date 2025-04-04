import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ReactNode } from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    isOpen?: boolean;
    close?: () => void;
    children: ReactNode;
}

export const Drawer: FC<DrawerProps> = (props) => {
    const {
        className, isOpen, children, close,
    } = props;

    if (!isOpen) return null;

    return (
        <Portal>
            <div className={classNames(cls.Drawer, { [cls.show]: isOpen }, [className])} onClick={close}>
                <Overlay close={close} />
                <div className={cls.z}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
