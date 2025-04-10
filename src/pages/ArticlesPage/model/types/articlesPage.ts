import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export enum ArticlesSort {
    TITLE = 'title',
    VIEWS = 'views',
    CREATED = 'createdAt'
}

export interface ArticlesPagesSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;
    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean;
    _inited: boolean;

    // filter
    sort: ArticlesSort;
    order: SortOrder;
    search: string;

}
