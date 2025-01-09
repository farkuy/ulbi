import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

export enum TextPos {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

interface ProfileCardProps {
    className?: string;
    profileData?: Profile;
    isLoading?: boolean;
    error?: string;
    textPos?: TextPos;
    readOnly?: boolean;
}

export const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {
        className,
        profileData,
        isLoading,
        error,
        textPos = TextPos.CENTER,
        readOnly,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error, cls[textPos]])}>
                <Text title={t('HAVE_ERROR')} text={t('PLS_RELOAD')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>

            <div className={classNames(cls.info)}>
                <Input
                    value={profileData?.first ?? ''}
                    placeholder={t('FIRST_NAME')}
                    readOnly={readOnly}
                    className={cls.input}
                />
                <Input
                    value={profileData?.lastname ?? ''}
                    placeholder={t('LAST_NAME')}
                    readOnly={readOnly}
                    className={cls.input}
                />
                <Input
                    value={profileData?.city ?? ''}
                    placeholder={t('CITY')}
                    readOnly={readOnly}
                    className={cls.input}
                />
            </div>

        </div>
    );
};
