import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { fetchArticleDetails } from '../service/fetchArticleDetails';
import { Article, ArticleSchema } from '../types/article';

const initialState: ArticleSchema = {
    error: undefined,
    isLoading: false,
};

export const articleDetailsSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleDetails.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticleDetails.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = undefined;
        });
        builder.addCase(fetchArticleDetails.rejected, (state) => {
            state.isLoading = false;
            state.error = i18n.t('INCORRECT_DATA');
        });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
