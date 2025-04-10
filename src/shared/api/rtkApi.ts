import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_AUTH_TOKEN } from '@/shared/consts/auth';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_AUTH_TOKEN) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
