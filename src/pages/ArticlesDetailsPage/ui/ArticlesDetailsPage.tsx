import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { articleDetailsReducer, getArticleDetails } from 'entities/ArticleDetails';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleDetails } from 'entities/ArticleDetails/model/service/fetchArticleDetails';
import { useSelector } from 'react-redux';
import cls from './ArticlesDetailsPage.module.scss';

const initialReducer: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticlesDetailsPage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articleDetails = useSelector(getArticleDetails);

    useEffect(() => {
        // TODO подумать как избавиться от этого ублюдства
        if (__PROJECT__ !== 'storybook') dispatch(fetchArticleDetails(1));
    }, [dispatch]);

    console.log(articleDetails);

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [])}>
            {t('ArticlesDetailsPage')}
        </div>
    );
};

export default memo(ArticlesDetailsPage);
