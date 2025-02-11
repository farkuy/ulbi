import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'pages/ArticlesPage/model/selectors/getArticles/getArticles';
import { articlesAction, articlesReducer } from 'pages/ArticlesPage/model/slice/articlesPageslice';

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (props, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlesLimit(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
