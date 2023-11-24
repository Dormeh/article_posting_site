import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { profileConfig } from 'entities/Profile/ui/ProfileCard/config';
import { FieldValues, useForm } from 'react-hook-form';
import { Form } from 'shared/ui/Form/ui/Form';
import { Loader } from 'shared/ui/Loader/Loader';
import { useCallback, useState } from 'react';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
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

    const [readonly, setReadonly] = useState<boolean>(true);

    const onEdit = useCallback(() => {
        setReadonly(true);
        customFunc?.(reset);
    }, [customFunc, reset]);
    const onCancelEdit = useCallback(() => {
        setReadonly(false);
    }, []);

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
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])}>
            <Text className={cls.title} title={t('Профиль')} />
            <div className={cls.buttonBox}>
                {readonly
                    ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onCancelEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onEdit}
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
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </div>
            )}
            <Form
                className={classNames(cls.profileForm, {}, [className])}
                fields={profileConfig}
                formError={error}
                register={register}
                errors={errors}
                control={control}
                readonly={readonly}
            />
        </div>
    );
};
