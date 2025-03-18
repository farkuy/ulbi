import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { VStack } from 'shared/ui/Stack';
import { EdditableProfileCard } from 'features/edditableProfileCard/ui/EdditableProfileCard';
import { useParams } from 'react-router-dom';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo<ProfilePageProps>((props) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    if (!id) return null;

    return (
        <PageWrapper className={cls.ProfilePage}>
            <VStack gap="16" max>
                <div>
                    {t('PROFILE_PAGE')}
                </div>
                <EdditableProfileCard id={id} />
            </VStack>

        </PageWrapper>
    );
});

export default ProfilePage;
