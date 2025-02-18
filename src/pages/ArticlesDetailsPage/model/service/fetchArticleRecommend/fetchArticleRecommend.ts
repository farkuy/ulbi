import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommend = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetails/fetchArticleRecommend',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
