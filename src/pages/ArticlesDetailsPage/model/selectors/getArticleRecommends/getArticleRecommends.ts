import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendLoading = (state: StateSchema) => state.articleDetailsPage?.recommendation?.isLoading;
export const getArticleRecommendError = (state: StateSchema) => state.articleDetailsPage?.recommendation?.error;
