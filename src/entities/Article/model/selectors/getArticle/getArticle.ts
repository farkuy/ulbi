import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetails = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
