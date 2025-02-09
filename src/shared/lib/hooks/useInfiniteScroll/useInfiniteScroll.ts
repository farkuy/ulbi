import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScroll {
    callback: () => void,
    targetRef: MutableRefObject<HTMLDivElement | null>,

    wrapperRef: MutableRefObject<HTMLDivElement | null>,
}

export const useInfiniteScroll = (props: useInfiniteScroll) => {
    const { callback, targetRef, wrapperRef } = props;

    useEffect(() => {
        const options = {
            root: wrapperRef,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(targetRef);
        return () => {
            observer.disconnect();
        };
    }, []);
};
