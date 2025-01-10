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
    onChangeFirstName: (value: string) => void;
    onChangeLastName: (value: string) => void;
    onChangePlace: (value: string) => void;
    onChangeAge: (value: string) => void;
}

export const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {
        className,
        profileData,
        isLoading,
        error,
        textPos = TextPos.CENTER,
        readOnly,
        onChangeFirstName,
        onChangeLastName,
        onChangePlace,
        onChangeAge,
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
                    readonly={readOnly}
                    className={cls.input}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={profileData?.lastname ?? ''}
                    placeholder={t('LAST_NAME')}
                    readonly={readOnly}
                    className={cls.input}
                    onChange={onChangeLastName}
                />
                <Input
                    value={profileData?.city ?? ''}
                    placeholder={t('CITY')}
                    readonly={readOnly}
                    className={cls.input}
                    onChange={onChangePlace}
                />
                <Input
                    value={String(profileData?.age) ?? ''}
                    placeholder={t('AGE')}
                    readonly={readOnly}
                    className={cls.input}
                    onChange={onChangeAge}
                    type="number"
                />
            </div>

        </div>
    );
};
