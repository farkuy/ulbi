import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollProps<E extends Element> {
    callback: () => void,
    targetRef: MutableRefObject<E | null>,

    wrapperRef: MutableRefObject<E | null>,
}

export const useInfiniteScroll = <T extends Element>(props: useInfiniteScrollProps<T>) => {
    const { callback, targetRef, wrapperRef } = props;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    callback();
                }
            },
            {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            },
        );

        if (targetRef.current) observer.observe(targetRef.current);
        return () => {
            if (targetRef) observer.disconnect();
        };
    }, [callback, targetRef, wrapperRef]);
};
