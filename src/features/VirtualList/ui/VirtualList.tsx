import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import cls from './VirtualList.module.scss';

interface VirtualListProps {
    className?: string;
    height?: number;
    listSize?: number;
    itemHeight?: number;
    row?: (index: number) => ReactNode;
    id?: string
}

export const VirtualList:FC<VirtualListProps> = (props) => {
    const {
        height = 0, listSize = 0, itemHeight = 0, row, className, id, children,
    } = props;
    const [scrollPos, setScrollPos] = useState(0);
    const element = document.getElementById(id || 'some_key_random');
    const realSize = Math.ceil(height / itemHeight) + 3;

    const handleScroll = () => {
        if (element) {
            // console.log(element.scrollTop);
            setScrollPos(element.scrollTop);
        }
    };

    useEffect(() => {
        if (element) element.addEventListener('scroll', handleScroll);

        return () => {
            if (element) element.removeEventListener('scroll', handleScroll);
        };
    }, [element]);

    const arrVisible = useMemo(() => {
        console.log(scrollPos / (listSize * itemHeight));
    }, [scrollPos, listSize]);

    return (
        <div className={classNames(cls.VirtualList, {}, [className])}>{children}</div>
    );
};
