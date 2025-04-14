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
        setArticleRate: builder.mutation<Rate, PushRate>({
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

export const { useGetArticleRateQuery, useSetArticleRateMutation } = articleRateApi;
