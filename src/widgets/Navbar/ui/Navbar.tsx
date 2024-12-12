import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    onClick={logout}
                >
                    {t('LOGOUT')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onOpenModal}
            >
                {t('auth')}
            </Button>
            {isAuthModal && <LoginModal closeModal={onCloseModal} isOpen={isAuthModal} />}
        </div>
    );
};
