import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}
const ProfilePage:FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div>
            {t('PROFILE_PAGE')}
        </div>
    );
};

export default ProfilePage;
