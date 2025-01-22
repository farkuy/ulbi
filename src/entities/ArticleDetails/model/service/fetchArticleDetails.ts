import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/article';

export const fetchArticleDetails = createAsyncThunk<Article, number, ThunkConfig<string>>(
    'article/fetchArticle',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            console.log(11);
            const response = await extra.api.get<Article>(`/article/${id}`);

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
