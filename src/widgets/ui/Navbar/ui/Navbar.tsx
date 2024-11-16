import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { AppLink, LinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink
                    to="/"
                    className={classNames(cls.maineLink, {}, [])}
                    theme={LinkTheme.PRIMARY}
                >
                    {t('MAINE')}
                </AppLink>
                <AppLink
                    // TODO подумать как обойти это
                    // eslint-disable-next-line i18next/no-literal-string
                    to="/about"
                    theme={LinkTheme.PRIMARY}
                >
                    {t('ABOUT_US')}
                </AppLink>
            </div>
        </div>
    );
};
