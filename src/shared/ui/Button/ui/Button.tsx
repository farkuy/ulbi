import { classNames } from 'shared/lib/classNames/classNames';
import {ButtonHTMLAttributes, FC} from 'react';
import * as cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className])}
            {...otherProps}
        >
            { children }
        </button>
    );
};
