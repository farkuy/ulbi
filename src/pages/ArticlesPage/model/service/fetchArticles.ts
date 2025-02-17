import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesLimit, getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
} from 'pages/ArticlesPage/model/selectors/getArticles/getArticles';
import { articlesAction } from 'pages/ArticlesPage/model/slice/articlesPageslice';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export interface FetchArticleListProps {
    page?: number;
    isNewFilter?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (props, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlesLimit(getState());
        const search = getArticlesSearch(getState());
        const sort = getArticlesSort(getState());
        const order = getArticlesOrder(getState());

        try {
            addQueryParams({ sort, order, search });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                },
            });

            if (!response.data) {
                return rejectWithValue('server error');
            }

            dispatch(articlesAction.setInited(true));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
