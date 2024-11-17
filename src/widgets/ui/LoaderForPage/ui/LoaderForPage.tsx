import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import * as cls from './LoaderForPage.module.scss';

interface LoaderForPageProps {
    className?: string;
}

export const LoaderForPage:FC<LoaderForPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.LoaderForPage, {}, [className])}>
            <Loader />
        </div>
    );
};
