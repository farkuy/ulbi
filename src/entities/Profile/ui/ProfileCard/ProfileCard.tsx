import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfile } from '../../model/selectors/getProfile/getProfile';
import cls from './ProfileCard.module.scss';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard:FC<ProfileCardProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfile);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <div>
                    {profileData?.username}
                    :
                    {' '}
                    {profileData?.lastname}
                    {' '}
                    {profileData?.first}
                </div>
                <Button>{t('TOGGLE')}</Button>
            </div>

            <div className={classNames(cls.info)}>
                <Input value={profileData?.first ?? ''} placeholder={t('FIRST_NAME')} className={cls.input} />
                <Input value={profileData?.lastname ?? ''} placeholder={t('LAST_NAME')} className={cls.input} />
                <Input value={profileData?.city ?? ''} placeholder={t('CITY')} className={cls.input} />
            </div>

        </div>
    );
};
