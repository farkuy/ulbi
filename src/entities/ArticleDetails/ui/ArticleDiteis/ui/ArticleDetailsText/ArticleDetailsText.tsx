import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsText.module.scss';

interface ArticleDetailsTextProps {
    className?: string;
}

export const ArticleDetailsText = memo((props:ArticleDetailsTextProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsText, {}, [className])}>
            ArticleDetailsText
        </div>
    );
});
