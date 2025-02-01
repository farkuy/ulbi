import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfile, Profile, profileActions, saveProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User';
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
        <div className={cls.ProfileCardHeader}>
            <div>
                {t('PROFILE')}
            </div>
            <div className={cls.buttons}>
                {
                    user?.id === profile?.id && (
                        <>
                            <Button
                                onClick={readOnly ? toggleReadonly : cancelChange}
                                className={cls.left_button}
                                theme={readOnly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED}
                            >
                                {readOnly ? t('TOGGLE') : t('CANCEL')}
                            </Button>
                            {
                                !readOnly && <Button onClick={saveProfileChange}>{t('SAVE')}</Button>
                            }
                        </>
                    )
                }

            </div>
        </div>
    );
};
