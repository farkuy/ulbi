import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    close?: () => void;
}

export const Overlay: FC<OverlayProps> = (props) => {
    const { className, close } = props;

    return (
        <div className={classNames(cls.Overlay, {}, [className])} onClick={close} />
    );
};
