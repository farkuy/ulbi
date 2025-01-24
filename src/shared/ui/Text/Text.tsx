import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
    size?: TextSize;
}

export const Text:FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme = ThemeText.PRIMARY,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size]])}>
            <p className={classNames(cls.title)}>{title}</p>
            <p className={classNames(cls.text)}>{text}</p>
        </div>
    );
};
