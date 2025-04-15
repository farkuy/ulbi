import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from '@/shared/lib';
import { ArticleView } from '@/entities/Article';
import { articlesAction } from '@/pages/ArticlesPage/model/slice/articlesPageslice';
import { ToggleArticlesView } from '@/features/ToggleArticlesView';
import {
    getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesView,
} from '@/pages/ArticlesPage';
import { Input } from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types/sort';
import { ArticlesSort } from '@/pages/ArticlesPage/model/types/articlesPage';
import { useDebouncer } from '@/shared/lib/hooks/useDebouncer/useDebouncer';
import { fetchArticles } from '@/pages/ArticlesPage/model/service/fetchArticles';
import { ArticleSort } from './components/ArticleSort/ArticleSort';
import cls from './ArticlePageFilter.module.scss';

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter: FC<ArticlePageFilterProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const search = useSelector(getArticlesSearch);
    const order = useSelector(getArticlesOrder);
    const sort = useSelector(getArticlesSort);

    const updateRequest = useCallback(() => {
        dispatch(articlesAction.setPage(1));
        dispatch(fetchArticles({ page: 1, isNewFilter: true }));
    }, [dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesAction.setView(view));
    }, [dispatch]);

    const onSearch = useDebouncer(() => {
        updateRequest();
    }, 500);

    const onInput = useCallback((value: string) => {
        dispatch(articlesAction.setSearch(value));
        onSearch();
    }, [dispatch, onSearch]);

    const onChangeSort = useCallback((value: ArticlesSort) => {
        dispatch(articlesAction.setSort(value));
        updateRequest();
    }, [dispatch, updateRequest]);

    const onChangeOrder = useCallback((value: SortOrder) => {
        dispatch(articlesAction.setOrder(value));
        updateRequest();
    }, [dispatch, updateRequest]);

    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.top}>
                <ToggleArticlesView view={view} onChangeView={onChangeView} />
                <ArticleSort sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
            </div>
            <Input value={search} onChange={onInput} placeholder={t('SEARCH')} />
        </div>
    );
};
