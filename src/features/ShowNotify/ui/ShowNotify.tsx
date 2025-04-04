import React, { useState } from 'react';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ShowNotify.module.scss';

export const ShowNotify = () => {
    const [isVisible, setVisible] = useState(false);

    const showDrawer = () => setVisible(true);
    const hiddenDrawer = () => setVisible(false);

    if (window.innerWidth < 800) {
        return (
            <>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={showDrawer}
                >
                    <Icon className={cls.icon} Svg={NotificationIcon} />
                </Button>
                <Drawer isOpen={isVisible} close={hiddenDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        );
    }

    return (
        <Popover
            trigger={<Icon className={cls.icon} Svg={NotificationIcon} />}
        >
            <NotificationList />
        </Popover>
    );
};
