import { FC } from 'react';
import { classNames } from '@/shared/lib';
import { VStack } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList: FC<NotificationListProps> = (props) => {
    const { className } = props;
    const { data, isLoading, error } = useGetNotificationsQuery(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" height={30} />
                <Skeleton width="100%" height={30} />
                <Skeleton width="100%" height={30} />
            </VStack>
        );
    }

    if (error) return null;

    return (
        <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
            {data && data.map((item) => (
                <NotificationItem notification={item} key={item.id} />
            ))}
        </VStack>
    );
};
