import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { CURRENCY } from 'entities/Currency';
import { COUNTRY } from 'entities/Country';
import { ProfileCardHeader } from 'entities/Profile/ui/ProfileCardHeader/ProfileCardHeader';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { ProfileCard, TextPos } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { VStack } from 'shared/ui/Stack';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../model/types/edditableProfileCard.types';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getReadonly } from '../model/selectors/getReadonly/getReadonly';
import { getProfileValidateError } from '../model/selectors/getProfileValidateError/getProfileValidateError';
import { fetchProfileData } from '../model/service/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';

interface EdditableProfileCardProps {
    className?: string;
    id: string;
}

const initialReducer:ReducersList = {
    profile: profileReducer,
};

export const EdditableProfileCard: FC<EdditableProfileCardProps> = (props) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

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
            <VStack gap="8" max className={classNames('', {}, [className])}>
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
            </VStack>
        </DynamicModuleReducer>
    );
};
