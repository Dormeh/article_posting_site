import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { profileConfig } from 'entities/Profile/ui/ProfileCard/config';
import { FieldValues, useForm } from 'react-hook-form';
import { Form } from 'shared/ui/Form/ui/Form';
import { Loader } from 'shared/ui/Loader/Loader';
import { useState } from 'react';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
    className?: string;
    customFunc?: (fn: VoidFunction) => void
}

export const ProfileCard = ({ className, customFunc }: ProfileCardProps) => {
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
        control,
    } = useForm<FieldValues>({
        values: data,
        mode: 'onBlur',
    });

    const [readOnly, setReadOnly] = useState<boolean>(true);

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error && !data) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
                <Text theme={TextTheme.ERROR} title={t('Произошла сетевая ошибка')} />
                <Text className={cls.title} theme={TextTheme.ERROR} text={t(error)} />
                <Text theme={TextTheme.PRIMARY} text={t('Попробуйте обновить страницу')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readOnly }, [className])}>
            <Text className={cls.title} title={t('Профиль')} />
            <div className={cls.buttonBox}>
                {readOnly
                    ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={() => setReadOnly(false)}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={() => {
                                    setReadOnly(true);
                                    // reset();
                                    customFunc?.(reset);
                                }}
                            >
                                {t('Отменить изменения')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
            </div>
            <Form
                className={classNames(cls.profileForm, { [cls.readOnly]: readOnly }, [className])}
                fields={profileConfig}
                formError={error}
                register={register}
                errors={errors}
                control={control}
            />

        </div>
    );
};
