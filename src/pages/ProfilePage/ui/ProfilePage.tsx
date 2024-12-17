import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { profileReducer } from 'entities/Profile';

const initialReducer:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo<ProfilePageProps>((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleReducer reducers={initialReducer}>
            <div>
                {t('PROFILE_PAGE')}
            </div>
        </DynamicModuleReducer>

    );
});

export default ProfilePage;
