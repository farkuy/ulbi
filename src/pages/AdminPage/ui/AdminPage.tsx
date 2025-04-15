import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import cls from './AdminPage.module.scss';

interface AdminPageProps {
    className?: string;
}

const AdminPage: FC<AdminPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <PageWrapper className={classNames(cls.AdminPage, {}, [className])}>
            {t('Админка')}
        </PageWrapper>
    );
};
export default memo(AdminPage);
