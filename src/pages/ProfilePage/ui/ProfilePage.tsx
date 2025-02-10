import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileValidateError,
    getReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { TextPos } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { ProfileCardHeader } from 'entities/Profile/ui/ProfileCardHeader/ProfileCardHeader';
import { CURRENCY } from 'entities/Currency';
import { COUNTRY } from 'entities/Country';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useParams } from 'react-router-dom';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import cls from './ProfilePage.module.scss';

const initialReducer:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo<ProfilePageProps>((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams<{id: string}>();

    const profileForm = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getReadonly);
    const validateError = useSelector(getProfileValidateError);

    useStartEffect(() => dispatch(fetchProfileData(id)));

    const translateError = {
        [ValidateProfileError.INCORRECT_DATA]: t('INCORRECT_DATA'),
        [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
        [ValidateProfileError.EMPTY_DATA]: t('EMPTY_DATA'),
        [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
    };

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangePlace = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ city: value || '' }));
    }, [dispatch]);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.setProfileForm({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: CURRENCY) => {
        dispatch(profileActions.setProfileForm({ currency: value || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: COUNTRY) => {
        dispatch(profileActions.setProfileForm({ country: value || '' }));
    }, [dispatch]);

    return (
        <DynamicModuleReducer reducers={initialReducer}>
            <PageWrapper className={cls.ProfilePage}>
                <div>
                    {t('PROFILE_PAGE')}
                </div>
                <ProfileCardHeader readOnly={readOnly} />
                {
                    validateError?.map((err) => (
                        <Text theme={ThemeText.ERROR} title={translateError[err]} key={err} />))
                }
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
                    onChangeUserName={onChangeUserName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </PageWrapper>

        </DynamicModuleReducer>

    );
});

export default ProfilePage;
