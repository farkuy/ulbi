import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import i18n from 'i18next';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';
import { fetchArticleRecommend } from '../service/fetchArticleRecommend/fetchArticleRecommend';

const recomendAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommend = recomendAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendation || recomendAdapter.getInitialState(),
);

const articleRecommendsSlice = createSlice({
    name: 'articleRecommends',
    initialState: recomendAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommend.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticleRecommend.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
            state.isLoading = false;
            state.error = undefined;
            recomendAdapter.setAll(state, payload);
        });
        builder.addCase(fetchArticleRecommend.rejected, (state) => {
            state.isLoading = false;
            state.error = i18n.t('INCORRECT_DATA');
        });
    },
});

export const { reducer: articleRecommendsReducer } = articleRecommendsSlice;
