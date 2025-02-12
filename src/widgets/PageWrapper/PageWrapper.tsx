import { classNames } from 'shared/lib/classNames/classNames';
import {
    HTMLProps, memo, ReactNode, UIEvent,
} from 'react';
import { getScrollValueByKey, scrollSaveActions } from 'features/SaveScrollPosition';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { keyStateSchema, StateSchema } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'className' | 'children'> {
    className?: string;
    children: ReactNode;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
    const { className, children, ...otherProps } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPos = useSelector((state: StateSchema) => getScrollValueByKey(state, pathname as keyStateSchema));

    const onScroll = (e: UIEvent<HTMLElement>) => {
        console.log(scrollPos);
        const { scrollTop } = e.currentTarget;
        dispatch(scrollSaveActions.saveScrollPage({ key: pathname as keyStateSchema, pos: scrollTop }));
    };

    return (
        <section className={classNames(cls.PageWrapper, {}, [className])} onScroll={onScroll} {...otherProps}>
            {children}
        </section>
    );
});
