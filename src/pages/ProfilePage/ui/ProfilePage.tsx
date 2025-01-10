import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import {
    fetchProfileData,
    getProfile,
    getProfileError, getProfileForm,
    getProfileLoading,
    getReadonly,
    profileActions,
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

    const profileForm = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ lastname: value || '' }));
    }, [dispatch]);

    const onChangePlace = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ age: Number(value) || 0 }));
    }, [dispatch]);

    return (
        <DynamicModuleReducer reducers={initialReducer}>
            <div>
                {t('PROFILE_PAGE')}
            </div>
            <ProfileCardHeader profileData={profileForm} readOnly={readOnly} />
            <ProfileCard
                profileData={profileForm}
                isLoading={isLoading}
                error={error}
                textPos={TextPos.LEFT}
                readOnly={readOnly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangePlace={onChangePlace}
                onChangeAge={onChangeAge}
            />
        </DynamicModuleReducer>

    );
});

export default ProfilePage;
