import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLProps, memo, ReactNode } from 'react';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'className' | 'children'> {
    className?: string;
    children: ReactNode;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <section className={classNames(cls.PageWrapper, {}, [className])} {...otherProps}>
            {children}
        </section>
    );
});
