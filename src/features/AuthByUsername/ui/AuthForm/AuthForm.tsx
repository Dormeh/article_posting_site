import { classNames } from 'shared/lib/classNames/classNames';
import { Form } from 'shared/ui/Form/Form';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { LoginAuthData } from '../../model/types/loginSchema';
import { authFormConfig } from './config';
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

const AuthForm = memo((props: AuthFormProps) => {
    const {
        className,
        formClose,
        focus,
    } = props;

    const {
        formTitle,
        fields,
    } = authFormConfig;

    const dispatch = useAppDispatch();
    const authData = useSelector(getLoginAuthData);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        clearErrors,
    } = useForm<FieldValues>({
        mode: 'onBlur',
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
    const handleLogin = useCallback(async (data: LoginAuthData): Promise<void> => {
        const result = await dispatch(loginByUsername(data)).catch((error) => error);

        if (result.meta.requestStatus === 'fulfilled') {
            dispatch(loginActions.setAuthData(data));
            formClose?.();
            if (__IS_DEV__) console.log(data);
        } else if (__IS_DEV__) console.log('ОШИБКА АВТОРИЗАЦИИ', result.error);
    }, [dispatch, formClose]);

    const [t] = useTranslation();
    const footer = (
        <Button
            className={cls.authBtn}
            type="submit"
            theme={ButtonTheme.OUTLINE}
            disabled={isLoading}
        >
            {t('Войти')}
        </Button>
    );
    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <Form
                className={classNames(cls.AuthForm, {}, [className])}
                formTitle={t(formTitle)}
                fields={fields}
                footer={footer}
                onSubmit={handleSubmit(handleLogin)}
                formError={error}
                register={register}
                errors={errors}
            />
        </DynamicModuleLoader>

    );
});

export default AuthForm;
