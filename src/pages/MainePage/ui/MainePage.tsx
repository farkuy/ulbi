import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function MainePage() {
    const { t } = useTranslation();

    useEffect(() => {
        throw new Error();
    }, []);

    return (
        <div>
            {t('MAINE')}
        </div>
    );
}

export default MainePage;
