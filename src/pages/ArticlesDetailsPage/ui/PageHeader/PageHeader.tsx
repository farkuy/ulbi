import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import { getUser } from '@/entities/User';
import { getArticleDetails } from '@/entities/Article';
import { Button } from '@/shared/ui/Button/Button';
import { AppLink } from '@/shared/ui';
import cls from './PageHeader.module.scss';
import { RoutePath } from '@/shared/consts';

interface PageHeaderProps {
    className?: string;
}

export const PageHeader: FC<PageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const user = useSelector(getUser);
    const article = useSelector(getArticleDetails);

    return (
        <div className={classNames(cls.PageHeader, {}, [className])}>
            {user?.id === article?.user.id
                && (
                    <AppLink to={`${RoutePath.article_details}${article?.id}/edit`}>
                        <Button>{t('EDIT')}</Button>
                    </AppLink>
                )}
        </div>
    );
};
