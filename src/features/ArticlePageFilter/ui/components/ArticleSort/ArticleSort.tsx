import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IOptions, Select } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticlesSort } from '@/pages/ArticlesPage/model/types/articlesPage';
import cls from './ArticleSort.module.scss';

interface ArticleSortProps {
    className?: string;
    order: SortOrder;
    sort: ArticlesSort;
    onChangeOrder: (value: SortOrder) => void;
    onChangeSort: (value: ArticlesSort) => void;

}

export const ArticleSort: FC<ArticleSortProps> = (props) => {
    const {
        className, order, sort, onChangeSort, onChangeOrder,
    } = props;
    const { t } = useTranslation();

    const orderTypes = useMemo<IOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ASC'),
        },
        {
            value: 'desc',
            content: t('DESC'),
        },
    ], [t]);

    const sortTypes = useMemo<IOptions<ArticlesSort>[] >(() => [
        {
            value: ArticlesSort.TITLE,
            content: t('TITLE'),
        },
        {
            value: ArticlesSort.CREATED,
            content: t('CREATED'),
        },
        {
            value: ArticlesSort.VIEWS,
            content: t('VIEWS'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSort, {}, [className])}>
            <Select onChange={onChangeOrder} value={order} label={t('Сортировать в')} options={orderTypes} />
            <Select onChange={onChangeSort} label={t('Сортировать по')} value={sort} options={sortTypes} />
        </div>
    );
};
