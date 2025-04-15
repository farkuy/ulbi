import { CSSProperties, FC, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    size?: number;
    src?: string;
    alt?: string;
}

export const Avatar:FC<AvatarProps> = (props) => {
    const {
        className,
        src = '',
        alt = '',
        size,
    } = props;

    const mods: Mods = {};

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={style}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
