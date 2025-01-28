import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleDetailsCommentError = (state: StateSchema) => state.articleDetailsComments?.error;
