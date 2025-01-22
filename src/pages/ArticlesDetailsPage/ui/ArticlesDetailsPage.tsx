import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/ArticleDetails';
import { useParams } from 'react-router-dom';
import cls from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [])}>
                {t('Article_Not_Found')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticlesDetailsPage);
