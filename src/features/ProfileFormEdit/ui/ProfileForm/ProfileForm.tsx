import { FieldValues, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Profile, ProfileCard } from 'entities/Profile';
import {
    getProfileCanEditMode,
} from '../../model/selectors/getProfileCanEditMode/getProfileCanEditMode';
import cls from './ProfileForm.module.scss';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { profileActions } from '../../model/slice/profileSlice';

export const ProfileForm = () => {
    const [readonly, setReadonly] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const isCanEdit = useSelector(getProfileCanEditMode);

    const {
        handleSubmit,
        formState: {
            errors, isDirty, isSubmitting,
        },
        setFocus,
        reset,
        control,
    } = useForm<FieldValues>({
        values: data,
        mode: 'all',
    });

    useEffect(() => {
        if (!readonly) setFocus('first');
    }, [readonly, setFocus]);

    const onCancelEdit = useCallback(() => {
        setReadonly(true);
        reset();
        dispatch(profileActions.errorReset());
    }, [dispatch, reset]);

    const onEdit = useCallback(() => {
        setReadonly(false);
    }, []);

    const onFormFocus = useCallback(() => {
        if (error) dispatch(profileActions.errorReset());
    }, [dispatch, error]);

    const updateProfile = useCallback(async (data: FieldValues):Promise<void> => {
        const result = await dispatch(updateProfileData(data as Profile))
            .catch((error) => error);
        if (result.meta.requestStatus === 'fulfilled') {
            setReadonly(true);
        } else if (__IS_DEV__) console.log('ОШИБКА ОБНОВЛЕНИЯ', result.error);
    }, [dispatch]);

    return (
        <>
            <div className={cls.heading}>
                <Text className={cls.title} title={t('Профиль')} />
                <div className={cls.buttonBox}>
                    {isCanEdit && (readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                disabled={!data}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    disabled={isSubmitting}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={handleSubmit(updateProfile)}
                                    disabled={!isDirty || isSubmitting}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        ))}
                </div>
            </div>
            <ProfileCard
                onClick={onFormFocus}
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
