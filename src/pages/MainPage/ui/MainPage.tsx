import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { RateModal } from '@/entities/Rate';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <RateModal />
        </PageWrapper>
    );
};

export default MainPage;
