import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsImage.module.scss';

interface ArticleDetailsImageProps {
    className?: string;
}

export const ArticleDetailsImage = memo((props: ArticleDetailsImageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsImage, {}, [className])}>
            ArticleDetailsImage
        </div>
    );
});
