import { FC } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

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

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size]])}>
            {title && <HeaderTag className={classNames(cls.title)}>{title}</HeaderTag>}
            <p className={classNames(cls.text)}>{text}</p>
        </div>
    );
};
