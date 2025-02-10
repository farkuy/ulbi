import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'pages/ArticlesPage/model/selectors/getArticles/getArticles';

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (props, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
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

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
