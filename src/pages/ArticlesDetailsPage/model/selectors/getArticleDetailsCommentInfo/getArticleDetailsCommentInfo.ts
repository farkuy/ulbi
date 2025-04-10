import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleDetailsCommentError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
