import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError:FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('ERROR')}
        </div>
    );
};
