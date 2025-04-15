import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width: number | string;
    height: number | string;
    borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className, width, height, borderRadius,
    } = props;

    const style: CSSProperties = useMemo(() => ({
        width,
        height,
        borderRadius,
    }), [width, height, borderRadius]);

    return (
        <div style={style} className={classNames(cls.Skeleton, {}, [className])} />
    );
};
