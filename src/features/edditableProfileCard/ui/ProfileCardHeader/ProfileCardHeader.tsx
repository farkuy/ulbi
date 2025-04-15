import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib';
import { getUser } from '@/entities/User';
import { HStack } from '@/shared/ui';
import { getProfile } from '../../model/selectors/getProfile/getProfile';
import { profileActions } from '../../model/slice/profileSlice';
import { saveProfileData }
    from '../../model/service/saveProfileData/saveProfileData';
import cls from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
    readOnly?: boolean;
}

export const ProfileCardHeader:FC<ProfileCardHeaderProps> = (props) => {
    const { readOnly } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfile);
    const user = useSelector(getUser);

    const toggleReadonly = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const cancelChange = useCallback(() => {
        dispatch(profileActions.cancelProfileChange());
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    const saveProfileChange = useCallback(() => {
        dispatch(saveProfileData());
    }, [dispatch]);

    return (
        <HStack justify="between" max>
            <div>
                {t('PROFILE')}
            </div>
            <div className={cls.buttons}>
                {
                    user?.id === profile?.id && (
                        <HStack gap="8">
                            <Button
                                onClick={readOnly ? toggleReadonly : cancelChange}
                                theme={readOnly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED}
                            >
                                {readOnly ? t('TOGGLE') : t('CANCEL')}
                            </Button>
                            {
                                !readOnly && <Button onClick={saveProfileChange}>{t('SAVE')}</Button>
                            }
                        </HStack>
                    )
                }

            </div>
        </HStack>
    );
};
