import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types/sort';
import { articlesAction } from '../slice/articlesPageslice';
import { ArticlesSort } from '../../model/types/articlesPage';
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
