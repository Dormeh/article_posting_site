import { classNames } from 'shared/lib/classNames/classNames';
import { Form } from 'shared/ui/Form/Form';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { loginByUsername } from '../../model/setvices/loginByUsername/loginByUsername';
import { getLoginFormState } from '../../model/selectors/getLoginFormState';
import { loginActions } from '../../model/slice/loginSlice';
import { LoginAuthData } from '../../model/types/loginSchema';
import { authFormConfig } from './config';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
    formClose?: () => void;
    className?: string;
    focus?: boolean;
}

export const AuthForm = (props: AuthFormProps) => {
    const {
        className,
        formClose,
        focus,
    } = props;

    const {
        formTitle,
        fields,
    } = authFormConfig;

    const dispatch = useDispatch();
    const { isLoading, error, authData } = useSelector(getLoginFormState);

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
    const handleLogin = async (data: LoginAuthData): Promise<void> => {
        const { error }: Record<string, any > = await dispatch(loginByUsername(data)); // TODO нужно типизировать диспатч
        if (!error) {
            dispatch(loginActions.setAuthData(data));
            formClose?.();
            if (__IS_DEV__) console.log(data);
        }
    };

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
    );
};
