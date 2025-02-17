import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesAction } from 'pages/ArticlesPage/model/slice/articlesPageslice';
import { SortOrder } from 'shared/types/sort';
import { ArticlesSort } from 'pages/ArticlesPage/model/types/articlesPage';
import { getArticlesInited } from '../../model/selectors/getArticles/getArticles';
import { fetchArticles } from '../../model/service/fetchArticles';

const urlParams: any[] = [
    { params: 'search', action: (val:string) => articlesAction.setSearch(val) },
    { params: 'sort', action: (val:ArticlesSort) => articlesAction.setSort(val) },
    { params: 'order', action: (val:SortOrder) => articlesAction.setOrder(val) },
];

export const initeArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initeArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesInited(getState());

        if (!inited) {
            urlParams.forEach((val) => {
                const data = searchParams.get(val.params);
                if (data) dispatch(val.action(data));
            });
            dispatch(fetchArticles({ page: 1 }));
        }
    },
);
