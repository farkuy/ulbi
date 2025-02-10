import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesView = (state: StateSchema) => state.articlesPage?.view;
export const getArticlesLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
