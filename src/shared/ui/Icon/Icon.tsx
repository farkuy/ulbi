import React, { memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement>{
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>,
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, ...otherProps } = props;

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
