import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { getReadonly, Profile, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
    className?: string;
    profileData?: Profile;
    readOnly?: boolean;
}

export const ProfileCardHeader:FC<ProfileCardHeaderProps> = (props) => {
    const { className, profileData, readOnly } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const toggleReadonly = useCallback(() => {
        dispatch(profileActions.setReadonly(!readOnly));
    }, [dispatch, readOnly]);

    return (
        <div className={cls.ProfileCardHeader}>
            <div>
                {profileData?.username}
            </div>
            <Button onClick={toggleReadonly}>{readOnly ? t('CANCEL') : t('TOGGLE')}</Button>
        </div>
    );
};
