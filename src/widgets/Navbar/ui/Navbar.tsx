import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUser, userActions } from '@/entities/User';
import { Dropdown } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ShowNotify } from '@/features/ShowNotify';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const userData = useSelector(getUser);
    const dispatch = useDispatch();

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const logout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (userData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <ShowNotify />
                <Dropdown
                    items={[
                        {
                            content: t('PROFILE'),
                            href: RoutePath.profile + userData.id,
                        },
                        {
                            content: t('LOGOUT'),
                            onClick: logout,
                        }]}
                    trigger={(
                        <Avatar
                            size={30}
                            src={userData.avatar}
                        />
                    )}
                    direction="bottom left"
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onOpenModal}
            >
                {t('auth')}
            </Button>
            {isAuthModal && <LoginModal closeModal={onCloseModal} isOpen={isAuthModal} />}
        </header>
    );
});
