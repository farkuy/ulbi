import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
            >
                {t('auth')}
            </Button>
            <Modal isOpen={isAuthModal} closeModal={() => setIsAuthModal(false)}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dolore facilis quis saepe?')}
            </Modal>
        </div>
    );
};
