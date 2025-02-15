import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import i18n from 'i18next';
import { Article, ArticleView } from 'entities/Article';
import { SHOW_MOD_ARTICLE_VIEW } from 'shared/consts/auth';
import { SortOrder } from 'shared/types/sort';
import { ArticlesPagesSchema, ArticlesSort } from '../types/articlesPage';
import { fetchArticles } from '../service/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const initialView = localStorage.getItem(SHOW_MOD_ARTICLE_VIEW) as ArticleView || ArticleView.SMALL;

const articlesSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPagesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: initialView,
        page: 1,
        hasMore: true,
        limit: initialView === ArticleView.BIG ? 4 : 9,
        search: '',
        sort: ArticlesSort.CREATED,
        order: 'asc',
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.limit = action.payload === ArticleView.BIG ? 4 : 9;
            localStorage.setItem(SHOW_MOD_ARTICLE_VIEW, action.payload);
            fetchArticles({ page: state.page });
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        setInited: (state, action: PayloadAction<boolean>) => {
            state._inited = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticlesSort>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
            state.isLoading = false;
            state.error = undefined;
            articlesAdapter.addMany(state, payload);
            state.hasMore = payload.length > 0;
        });
        builder.addCase(fetchArticles.rejected, (state) => {
            state.isLoading = false;
            state.error = i18n.t('INCORRECT_DATA');
        });
    },
});

export const { reducer: articlesReducer, actions: articlesAction } = articlesSlice;
