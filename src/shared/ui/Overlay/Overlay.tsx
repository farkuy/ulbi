import { FC } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClose?: () => void;
}

export const Overlay: FC<OverlayProps> = (props) => {
    const { className, onClose } = props;

    return (
        <div className={classNames(cls.Overlay, {}, [className])} onClick={onClose} />
    );
};
