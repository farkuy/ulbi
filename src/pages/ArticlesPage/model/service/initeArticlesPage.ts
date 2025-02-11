import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesInited } from '../../model/selectors/getArticles/getArticles';
import { fetchArticles } from '../../model/service/fetchArticles';

export const initeArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initeArticlesPage',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesInited(getState());

        if (!inited) dispatch(fetchArticles({ page: 1 }));
    },
);
