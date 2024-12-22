import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    closeModal: () => void;
}

const LoginModal:FC<LoginModalProps> = (props) => {
    const { className, isOpen, closeModal } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            closeModal={closeModal}
            lazy
        >
            <LoginForm onClose={closeModal} />
        </Modal>
    );
};

export default LoginModal;
