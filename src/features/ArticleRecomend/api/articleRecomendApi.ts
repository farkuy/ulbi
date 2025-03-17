import { api } from 'shared/api/rtkApi';

const articleRecommendApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecommend: builder.query({
            query: (limit) => ({
                url: '/articles',
                method: 'GET',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetRecommendQuery } = articleRecommendApi;
