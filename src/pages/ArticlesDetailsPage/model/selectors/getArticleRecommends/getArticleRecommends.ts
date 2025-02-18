import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendLoading = (state: StateSchema) => state.articleRecomends?.isLoading;
export const getArticleRecommendError = (state: StateSchema) => state.articleRecomends?.error;
