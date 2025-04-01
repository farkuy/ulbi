import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetNotificationsQuery } = notificationsApi;
