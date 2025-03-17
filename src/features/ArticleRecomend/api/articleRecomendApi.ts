import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getRecommend: builder.query({
            query: (limit) => ({
                url: '/articles',
                method: 'GET',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetRecommendQuery } = articleRecommendApi;
