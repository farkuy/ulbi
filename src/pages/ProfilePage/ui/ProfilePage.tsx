import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducer:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo<ProfilePageProps>((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleReducer reducers={initialReducer}>
            <div>
                {t('PROFILE_PAGE')}
            </div>
            <ProfileCard />
        </DynamicModuleReducer>

    );
});

export default ProfilePage;
