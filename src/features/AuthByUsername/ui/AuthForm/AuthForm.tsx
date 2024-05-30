import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Form } from 'shared/ui/Form/ui/Form';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { LoginAuthData } from '../../model/types/loginSchema';
import { authFormConfig } from '../../model/config';
import cls from './AuthForm.module.scss';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginAuthData } from '../../model/selectors/getLoginAuthData/getLoginAuthData';

export interface AuthFormProps {
    formClose?: () => void;
    className?: string;
    focus?: boolean;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

type IAuthFormValues = LoginAuthData | FieldValues;

const AuthForm = memo((props: AuthFormProps) => {
    const { className, formClose, focus } = props;

    const { formTitle, fields } = authFormConfig;

    const dispatch = useAppDispatch();
    const authData = useSelector(getLoginAuthData);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
        setFocus,
        clearErrors,
    } = useForm<IAuthFormValues>({
        mode: 'onChange',
        defaultValues: authData,
    });

    useEffect(() => {
        if (focus) setFocus('username');
        clearErrors();
    }, [clearErrors, fields, focus, setFocus]);

    useEffect(() => {
        if (!focus && error) {
            dispatch(loginActions.errorReset());
        }
    }, [dispatch, error, focus]);
    const handleLogin = useCallback(
        async (data: IAuthFormValues): Promise<void> => {
            const result = await dispatch(loginByUsername(data as LoginAuthData)).catch(
                (error) => error,
            );

            if (result.meta.requestStatus === 'fulfilled') {
                formClose?.();
                if (__IS_DEV__) console.log(data);
                navigate(RouterPath.profile + result.payload.profileId);
            } else if (__IS_DEV__) console.log('ОШИБКА АВТОРИЗАЦИИ', result.payload);
        },
        [dispatch, formClose, navigate],
    );

    const { t } = useTranslation();
    const footer = (
        <Button
            className={cls.authBtn}
            type="submit"
            theme={ButtonTheme.OUTLINE}
            disabled={!isValid || !isDirty || isSubmitting}
            onClick={handleSubmit(handleLogin)}
        >
            {t('Войти')}
        </Button>
    );
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Form
                className={classNames(cls.AuthForm, {}, [className])}
                formTitle={t(formTitle)}
                fields={fields}
                footer={footer}
                formError={error}
                control={control}
                errors={errors}
            />
        </DynamicModuleLoader>
    );
});

export default AuthForm;
