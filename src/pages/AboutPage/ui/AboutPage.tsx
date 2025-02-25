import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfilePage } from 'pages/ProfilePage';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <ProfilePage />
    );
};

export default AboutPage;
