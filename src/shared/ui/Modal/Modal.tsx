import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const Modal:FC<ModalProps> = (props) => {
    const { isOpen, closeModal, children } = props;

    const mods: Record<string, boolean> = {
        [cls.open]: isOpen,
    };

    return (
        <div
            onClick={closeModal}
            className={classNames(cls.Back, mods)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={classNames(cls.content)}
            >
                {children}
            </div>
        </div>
    );
};
