import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as cls from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const langSwitch = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button className={classNames(cls.button, {}, [])} theme={ThemeButton.CLEAR} onClick={langSwitch}>{t("LANGUAGE")}</Button>
        </div>
    );
};
