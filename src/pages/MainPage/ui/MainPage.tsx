import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { Stars } from '@/shared/ui/Stars/Stars';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <Stars />
        </PageWrapper>
    );
};

export default MainPage;
