import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import i18n from 'i18next';
import { Article, ArticleView } from 'entities/Article';
import { SHOW_MOD_ARTICLE_VIEW } from 'shared/consts/auth';
import { ArticlesPagesSchema } from '../types/articlesPage';
import { fetchArticles } from '../service/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPagesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: localStorage.getItem(SHOW_MOD_ARTICLE_VIEW) as ArticleView || ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(SHOW_MOD_ARTICLE_VIEW, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
            state.isLoading = false;
            state.error = undefined;
            articlesAdapter.setAll(state, payload);
        });
        builder.addCase(fetchArticles.rejected, (state) => {
            state.isLoading = false;
            state.error = i18n.t('INCORRECT_DATA');
        });
    },
});

export const { reducer: articlesReducer, actions: articlesAction } = articlesSlice;
