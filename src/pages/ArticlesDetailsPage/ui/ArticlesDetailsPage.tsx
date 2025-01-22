import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [])}>
            {t('')}
        </div>
    );
};

export default memo(ArticlesDetailsPage);
