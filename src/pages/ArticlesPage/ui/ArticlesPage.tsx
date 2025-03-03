import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useRef } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { ArticlePageFilter } from 'features/ArticlePageFilter';
import { useSearchParams } from 'react-router-dom';
import { VirtualList } from 'features/VirtualList/ui/VirtualList';
import { initeArticlesPage } from '../model/service/initeArticlesPage';
import { getArticlesLoading, getArticlesView } from '../model/selectors/getArticles/getArticles';
import { fetchNextArticlesPage } from '../model/service/fetchNextArticlesList';
import { articlesReducer, getArticles } from '../model/slice/articlesPageslice';
import cls from './ArticlesPage.module.scss';

const initialReducer: ReducersList = {
    articlesPage: articlesReducer,
};

const ID_ARTICLE = 'id_article';

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const view = useSelector(getArticlesView);
    const [searchParams, setSearchParams] = useSearchParams();

    const onScrollEnd = useCallback(async () => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useStartEffect(() => dispatch(initeArticlesPage(searchParams)));

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount={false}>
            <PageWrapper
                onScrollEnd={onScrollEnd}
                className={classNames(cls.ArticlesPage, {}, [])}
                id={ID_ARTICLE}
            >
                <ArticlePageFilter />
                <ArticleList
                    id={ID_ARTICLE}
                    articles={articles}
                    view={view || ArticleView.SMALL}
                    isLoading={isLoading}
                />
            </PageWrapper>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesPage);
