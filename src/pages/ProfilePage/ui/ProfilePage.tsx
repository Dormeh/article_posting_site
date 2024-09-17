import { useTranslation } from 'react-i18next';
import { ProfileForm } from 'features/ProfileFormEdit';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import Page from 'shared/ui/Page/ui/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    let { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');
    if (__PROJECT__ === 'storybook') id = '1';
    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={className}>
            <ProfileForm id={id} />
        </Page>
    );
};

export default ProfilePage;
