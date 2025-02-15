import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { ArticleView } from 'entities/Article';
import { articlesAction } from 'pages/ArticlesPage/model/slice/articlesPageslice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleArticlesView } from 'features/ToggleArticlesView';
import { useSelector } from 'react-redux';
import {
    getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesView,
} from 'pages/ArticlesPage';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types/sort';
import { ArticlesSort } from 'pages/ArticlesPage/model/types/articlesPage';
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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesAction.setView(view));
    }, [dispatch]);

    const onSearch = useCallback((value: string) => {
        dispatch(articlesAction.setSearch(value));
    }, [dispatch]);

    const onChangeSort = useCallback((value: ArticlesSort) => {
        dispatch(articlesAction.setSort(value));
    }, [dispatch]);

    const onChangeOrder = useCallback((value: SortOrder) => {
        dispatch(articlesAction.setOrder(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <ToggleArticlesView view={view} onChangeView={onChangeView} />
            <Input value={search} onChange={onSearch} placeholder={t('SEARCH')} />
            <ArticleSort sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
        </div>
    );
};
