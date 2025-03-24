import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticlesSort } from '../../types/articlesPage';

export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';

export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticlesSort.CREATED;
