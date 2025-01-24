import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsCode.module.scss';

interface ArticleDetailsCodeProps {
    className?: string;
}

export const ArticleDetailsCode = memo((props: ArticleDetailsCodeProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsCode, {}, [className])}>
            ArticleDetailsCode
        </div>
    );
});
