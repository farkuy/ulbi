import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesHasMore, getArticlesLoading, getArticlesPage } from '../selectors/getArticles/getArticles';
import { fetchArticles } from '../service/fetchArticles';
import { articlesAction } from '../slice/articlesPageslice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const hasMore = getArticlesHasMore(getState());
        const page = getArticlesPage(getState());
        const isLoading = getArticlesLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(fetchArticles({ page: page + 1 }));
            dispatch(articlesAction.setPage(page + 1));
        }
    },
);
