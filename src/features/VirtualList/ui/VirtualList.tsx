import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { classNames, useThrottle } from '@/shared/lib';
import cls from './VirtualList.module.scss';

interface VirtualListProps {
    className?: string;
    height?: number;
    listSize?: number;
    itemHeight?: number;
    row: (index: number) => ReactNode;
    id?: string
}

export const VirtualList = (props: VirtualListProps) => {
    const {
        height = 0, listSize = 0, itemHeight = 0, row, className, id,
    } = props;
    const [scrollPos, setScrollPos] = useState(0);
    const element = document.getElementById(id || 'some_key_random');
    const visibleSize = Math.ceil(height / itemHeight) + 2;

    const handleScroll = useThrottle(() => {
        if (element) setScrollPos(element.scrollTop - 156);
    }, 10);

    useEffect(() => {
        if (element) element.addEventListener('scroll', handleScroll);

        return () => {
            if (element) element.removeEventListener('scroll', handleScroll);
        };
    }, [element]);

    const list = useMemo(() => {
        let startVisibleIndex = Math.floor(scrollPos / itemHeight);
        if (startVisibleIndex < 0) startVisibleIndex = 0;

        let endVisibleIndex = startVisibleIndex + visibleSize;
        endVisibleIndex = Math.min(endVisibleIndex, listSize - 1);

        const visibleItems = [];
        for (let i = startVisibleIndex; i <= endVisibleIndex; i++) {
            visibleItems.push(i);
        }

        return visibleItems;
    }, [scrollPos, itemHeight, visibleSize, listSize]);

    const upList = useMemo(() => {
        const upItems: number [] = [];
        const firstVisible = list[0];
        if (firstVisible > 2) {
            for (let i = 3; i >= 0; i--) {
                const index = firstVisible - i;
                if (index >= 0) { upItems.push(index); }
            }
        } else {
            for (let i = firstVisible; i >= 0; i--) {
                const index = firstVisible - i;
                if (index >= 0) { upItems.push(index); }
            }
        }

        return upItems;
    }, [list]);

    const downList = useMemo(() => {
        const downItems: number[] = [];
        const lastVisible = list[list.length - 1];

        if (!list.length || lastVisible >= listSize - 1) return downItems;

        for (let i = lastVisible + 1; i <= lastVisible + 2 && i < listSize; i++) {
            downItems.push(i);
        }

        return downItems;
    }, [list, listSize]);

    const combinedList = useMemo(() => [...upList, ...list, ...downList], [upList, list, downList]);

    return (
        <div
            className={classNames(cls.VirtualList, {}, [className])}
            style={{ height: `${listSize * itemHeight}px` }}
        >
            {
                combinedList.map((value) => (
                    <div
                        style={{ position: 'absolute', top: `${value * itemHeight}px` }}
                    >
                        {row(value)}
                    </div>
                ))
            }
        </div>
    );
};
