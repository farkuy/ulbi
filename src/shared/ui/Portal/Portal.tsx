import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import '../../../app/styles/index.scss'; // Не уверен в правильности этого мува

interface PortalProps {
    element?: HTMLElement,
}

export const Portal:FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;
    const { theme } = useTheme();

    return createPortal(
        <div className={classNames('app', {}, [theme])}>{children}</div>,
        element,
    );
};
