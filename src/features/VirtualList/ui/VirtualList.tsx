import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, ReactNode, useEffect, useState,
} from 'react';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './VirtualList.module.scss';

interface VirtualListProps {
    className?: string;
    height?: number;
    listSize?: number;
    itemSize?: number;
    row?: ReactNode;
    id?: string
}

export const VirtualList:FC<VirtualListProps> = (props) => {
    const {
        height, listSize, itemSize, row, className, id, children,
    } = props;
    const [scrollPos, setScrollPos] = useState(0);
    const element = document.getElementById(id || 'some_key_random');

    const handleScroll = useThrottle(() => {
        if (element) setScrollPos(element.scrollTop);
    }, 50);

    useEffect(() => {
        if (element) { element.addEventListener('scroll', handleScroll); }

        return () => {
            if (element) element.removeEventListener('scroll', handleScroll);
        };
    }, [element]);

    return (
        <div className={classNames(cls.VirtualList, {}, [className])}>
            {children}
        </div>
    );
};
