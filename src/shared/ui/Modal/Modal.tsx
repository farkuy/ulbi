import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    closeModal?: () => void;
    lazy?: boolean;
}

export const Modal:FC<ModalProps> = (props) => {
    const {
        isOpen, closeModal, className, children, lazy,
    } = props;

    const mods: Record<string, boolean | undefined> = {
        [cls.open]: isOpen,
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeModal) closeModal();
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isOpen) {
        return null;
    }

    return (
        <Portal>
            <div
                onClick={closeModal}
                className={classNames(cls.Back, mods, [className])}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={classNames(cls.content)}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
