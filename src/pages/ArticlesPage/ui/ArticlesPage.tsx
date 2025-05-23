import { memo, useCallback } from 'react';
import { classNames, useAppDispatch } from '@/shared/lib';
import { DynamicModuleReducer, ReducersList } from '@/shared/lib/components/DynamicModuleReducer';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { ArticlePageFilter } from '@/features/ArticlePageFilter';
import { ArticlesInfiniteList } from './ArticlesInfiniteList/ArticlesInfiniteList';
import { fetchNextArticlesPage } from '../model/service/fetchNextArticlesList';
import { articlesReducer } from '../model/slice/articlesPageslice';
import cls from './ArticlesPage.module.scss';

const initialReducer: ReducersList = {
    articlesPage: articlesReducer,
};

const ID_ARTICLE = 'id_article';

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const onScrollEnd = useCallback(async () => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleReducer
            reducers={initialReducer}
            deleteWithUnmount={false}
            className={classNames(cls.ArticlesPage, {}, [])}
        >
            <PageWrapper
                onScrollEnd={onScrollEnd}
                id={ID_ARTICLE}
            >
                <ArticlePageFilter />
                <ArticlesInfiniteList id={ID_ARTICLE} />
            </PageWrapper>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesPage);
