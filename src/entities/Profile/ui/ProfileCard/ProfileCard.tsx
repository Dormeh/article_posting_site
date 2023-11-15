import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileFirstName';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
    className?: string;
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames('', {}, [className])}>
            <div>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
        </div>
    );
};
