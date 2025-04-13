import { rtkApi } from '@/shared/api/rtkApi';
import { PushRate, Rate } from '../model/types';

const articleRateApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRate: builder.query<Rate[], {userId: string, articleId: string}>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                method: 'GET',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRate: builder.query<void, PushRate>({
            query: (params) => ({
                url: '/article-ratings',
                method: 'POST',
                body: {
                    ...params,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetArticleRateQuery, useSetArticleRateQuery } = articleRateApi;
