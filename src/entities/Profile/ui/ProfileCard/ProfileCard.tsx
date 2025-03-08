import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CURRENCY, CurrencySelect } from 'entities/Currency';
import { COUNTRY } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';
import { HStack, VStack } from 'shared/ui/Stack';
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
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangePlace?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUserName?: (value: string) => void;
    onChangeCurrency?: (value: CURRENCY) => void;
    onChangeCountry?: (value: COUNTRY) => void;
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
        onChangeUserName,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.error, cls[textPos]])}
            >
                <Text title={t('HAVE_ERROR')} text={t('PLS_RELOAD')} />
            </HStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, {}, [className])}>
            {
                profileData?.avatar
                && (
                    <div className={cls.avatar}>
                        <Avatar src={profileData.avatar} alt={t('PHOTO')} />
                    </div>
                )
            }
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
            <Input
                value={profileData?.username ?? ''}
                placeholder={t('USERNAME')}
                readonly={readOnly}
                className={cls.input}
                onChange={onChangeUserName}
            />
            <Input
                value={profileData?.avatar ?? ''}
                placeholder={t('PHOTO')}
                readonly={readOnly}
                className={cls.input}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                value={profileData?.currency}
                onChangeCurrency={onChangeCurrency}
                readonly={readOnly}
            />
            <CountrySelect
                value={profileData?.country}
                onChangeCountry={onChangeCountry}
                readonly={readOnly}
            />

        </VStack>
    );
};
