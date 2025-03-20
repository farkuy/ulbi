import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import cls from './BlockedNavPage.module.scss';

interface BlockedNavPageProps {
    className?: string;
}

const BlockedNavPage: FC<BlockedNavPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <PageWrapper className={classNames(cls.BlockedNavPage, {}, [className])}>
            {t('BLOCK')}
        </PageWrapper>
    );
};
export default memo(BlockedNavPage);
