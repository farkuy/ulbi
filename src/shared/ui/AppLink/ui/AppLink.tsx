import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import * as cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: LinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        theme = LinkTheme.PRIMARY,
        className = ""
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};
