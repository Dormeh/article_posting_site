import { FieldValues, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Profile, ProfileCard } from 'entities/Profile';
import { HStack } from 'shared/ui/Stack';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getProfileCanEditMode } from '../../model/selectors/getProfileCanEditMode/getProfileCanEditMode';
import cls from './ProfileForm.module.scss';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';

interface ProfileFormProps {
    id?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};
export const ProfileForm = ({ id }: ProfileFormProps) => {
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    const [readonly, setReadonly] = useState<boolean>(true);
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const isCanEdit = useSelector(getProfileCanEditMode);

    const {
        handleSubmit,
        formState: { errors, isDirty, isSubmitting },
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

    const updateProfile = useCallback(
        async (data: FieldValues): Promise<void> => {
            const result = await dispatch(updateProfileData(data as Profile)).catch(
                (error) => error,
            );
            if (result.meta.requestStatus === 'fulfilled') {
                setReadonly(true);
            } else if (__IS_DEV__) console.log('ОШИБКА ОБНОВЛЕНИЯ', result.error);
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <HStack className={cls.heading}>
                <Text className={cls.title} title={t('Профиль')} />
                <HStack gap={20} className={cls.buttonBox} max={false}>
                    {isCanEdit &&
                        (readonly ? (
                            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit} disabled={!data}>
                                {t('Редактировать')}
                            </Button>
                        ) : (
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
                </HStack>
            </HStack>
            <ProfileCard
                onClick={onFormFocus}
                error={error}
                data={data}
                readonly={readonly}
                control={control}
                errors={errors}
                isLoading={isLoading}
            />
        </DynamicModuleLoader>
    );
};
