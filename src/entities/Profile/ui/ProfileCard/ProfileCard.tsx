import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { profileConfig } from 'entities/Profile/ui/ProfileCard/config';
import { FieldValues, useForm } from 'react-hook-form';
import { Form } from 'shared/ui/Form/ui/Form';
import cls from 'features/AuthByUsername/ui/AuthForm/AuthForm.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';
import { useMemo } from 'react';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
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

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        clearErrors,
        setValue,
        reset,
    } = useForm<FieldValues>({
        values: data,
        mode: 'onBlur',
    });

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            <div>
                <Text title={t('Профиль')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => {
                        reset();
                    }}
                >
                    {t('Отменить изменения')}
                </Button>
            </div>
            <Form
                className={classNames(cls.profileForm, {}, [className])}
                fields={profileConfig}
                formError={error}
                register={register}
                errors={errors}
            />

        </div>
    );
};
