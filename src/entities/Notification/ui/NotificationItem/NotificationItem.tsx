import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    notification: Notification;
    className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const { className, notification } = props;

    const content = (
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            {notification.title}
            :
            {notification.description}
        </div>
    );

    if (notification.href) {
        return (
            <a
                href={notification.href}
                target="_blank"
                rel="noreferrer"
                className={classNames(cls.NotificationItem, {}, [className])}
            >
                {content}
            </a>
        );
    }

    return content;
};
