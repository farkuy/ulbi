import {
    HTMLProps, memo, ReactNode, UIEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    classNames, useAppDispatch, useStartEffect, useInfiniteScroll,
    useThrottle,
} from '@/shared/lib';
import { getScrollValueByKey, scrollSaveActions } from '@/features/SaveScrollPosition';
import { keyStateSchema, StateSchema } from '@/app/providers/StoreProvider';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'className' | 'children'> {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
    const {
        className, children, onScrollEnd, id, ...otherProps
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosForPage = useSelector(
        (state: StateSchema) => getScrollValueByKey(state, pathname as keyStateSchema),
    );
    const parent = useRef<HTMLDivElement | null>(null);
    const end = useRef<HTMLDivElement | null>(null);

    useInfiniteScroll({ callback: onScrollEnd, targetRef: end, wrapperRef: parent });

    useStartEffect(() => {
        if (parent.current) {
            parent.current.scrollTop = scrollPosForPage;
        }
    });

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        const { scrollTop } = e.currentTarget;
        dispatch(scrollSaveActions.saveScrollPage({ key: pathname as keyStateSchema, pos: scrollTop }));
    }, 1000);

    return (
        <main
            className={classNames(cls.PageWrapper, {}, [className])}
            onScroll={onScroll}
            ref={parent}
            id={id}
            {...otherProps}
        >
            {children}
            <div ref={end} />
        </main>
    );
});
