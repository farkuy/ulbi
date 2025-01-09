import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import {
    fetchProfileData,
    getProfile,
    getProfileError,
    getProfileLoading, getReadonly,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { TextPos } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { ProfileCardHeader } from 'entities/Profile/ui/ProfileCardHeader/ProfileCardHeader';

const initialReducer:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo<ProfilePageProps>((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfile);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleReducer reducers={initialReducer}>
            <div>
                {t('PROFILE_PAGE')}
            </div>
            <ProfileCardHeader profileData={profileData} readOnly={readOnly} />
            <ProfileCard
                profileData={profileData}
                isLoading={isLoading}
                error={error}
                textPos={TextPos.LEFT}
                readOnly={readOnly}
            />
        </DynamicModuleReducer>

    );
});

export default ProfilePage;
