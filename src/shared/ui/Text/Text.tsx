import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
}

export const Text:FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme = ThemeText.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            <p className={classNames(cls.title)}>{title}</p>
            <p className={classNames(cls.text)}>{text}</p>
        </div>
    );
};
