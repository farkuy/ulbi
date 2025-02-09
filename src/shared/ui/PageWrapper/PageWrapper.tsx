import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
    className?: string;
    children: ReactNode;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
    const { className, children } = props;

    return (
        <section className={classNames(cls.PageWrapper, {}, [className])}>
            {children}
        </section>
    );
});
