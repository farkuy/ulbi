import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { getArticlesLoading, getArticlesView } from 'pages/ArticlesPage/model/selectors/getArticles/getArticles';
import { ToggleArticlesView } from 'features/ToggleArticlesView';
import { fetchArticles } from '../model/service/fetchArticles';
import { articlesReducer, getArticles } from '../model/slice/articlesPageslice';
import cls from './ArticlesPage.module.scss';

const initialReducer: ReducersList = {
    articlesPage: articlesReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const view = useSelector(getArticlesView);

    useStartEffect(() => dispatch(fetchArticles()));

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <div className={classNames(cls.ArticlesPage, {}, [])}>
                <ToggleArticlesView />
                <ArticleList articles={articles} view={view || ArticleView.SMALL} isLoading={isLoading} />
            </div>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesPage);
