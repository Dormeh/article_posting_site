import { FieldValues, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Profile, ProfileCard } from 'entities/Profile';
import cls from './ProfileForm.module.scss';
import { updateProfileData } from '../../model/services/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

export const ProfileForm = () => {
    const [readonly, setReadonly] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    const {
        handleSubmit,
        formState: { errors },
        setFocus,
        reset,
        control,
        getValues,
    } = useForm<FieldValues>({
        values: data,
        mode: 'onChange',
    });

    useEffect(() => {
        if (!readonly) setFocus('first');
    }, [readonly, setFocus]);

    const onEdit = useCallback(() => {
        setReadonly(true);
        reset();
    }, [reset]);
    const onCancelEdit = useCallback(() => {
        setReadonly(false);
    }, []);
    const errorState = !!Object.entries(errors).length;
    const updateProfile = useCallback(async (data: FieldValues):Promise<void> => {
        const result = await dispatch(updateProfileData(getValues() as Profile))
            .catch((error) => error);
        if (result.meta.requestStatus === 'fulfilled') {
            setReadonly(true);
        } else if (__IS_DEV__) console.log('ОШИБКА ОБНОВЛЕНИЯ', result.error);
    }, [dispatch, getValues]);

    return (
        <>
            <div className={cls.heading}>
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
                                    onClick={handleSubmit(updateProfile)}
                                    disabled={errorState}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </div>
            </div>
            <ProfileCard
                error={error}
                data={data}
                readonly={readonly}
                control={control}
                errors={errors}
                isLoading={isLoading}
            />
        </>
    );
};
