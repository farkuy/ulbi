import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import cls from './ArticleCreateEdit.module.scss';

interface ArticleCreateEditProps {
    className?: string;
}

const ArticleCreateEdit: FC<ArticleCreateEditProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    return (
        <div className={classNames(cls.ArticleCreateEdit, {}, [className])}>
            { id ? `${t('EDIT ARTICLE')} : ${id}` : t('CREATE ARTICLE')}
        </div>
    );
};

export default memo(ArticleCreateEdit);
