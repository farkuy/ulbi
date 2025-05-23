import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <PageWrapper className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </PageWrapper>
    );
};
