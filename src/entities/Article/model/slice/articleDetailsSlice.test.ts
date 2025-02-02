import { fetchArticleDetails } from '../service/fetchArticleDetails';
import { ArticleSchema } from '../types/article';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('counterSlice.test', () => {
    const state: ArticleSchema = {
        isLoading: false,
        error: undefined,
    };

    test('fetchArticleDetails pending', () => {
        expect(articleDetailsReducer(state as ArticleSchema, fetchArticleDetails.pending)).toEqual({ isLoading: true, error: undefined });
    });
    test('fetchArticleDetails fulfilled', () => {
        expect(articleDetailsReducer(state as ArticleSchema, fetchArticleDetails.fulfilled)).toEqual({
            isLoading: false, error: undefined,
        });
    });
    test('fetchArticleDetails rejected', () => {
        expect(articleDetailsReducer(state as ArticleSchema, fetchArticleDetails.rejected)).toEqual({
            isLoading: false, error: undefined,
        });
    });
});
