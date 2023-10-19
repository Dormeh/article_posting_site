import { classNames } from 'shared/lib/classNames/classNames';
import { Form } from 'shared/ui/Form/Form';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/setvices/loginByUsername/loginByUsername';
import { LoginAuthData } from 'features/AuthByUsername';
import { getLoginFormState } from 'features/AuthByUsername/model/selectors/getLoginFormState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { useEffect } from 'react';
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
    const { isLoading, error } = useSelector(getLoginFormState);

    useEffect(() => {
        if (!focus && error) {
            dispatch(loginActions.errorReset());
        }
    }, [dispatch, error, focus]);
    const handleLogin = async (data: LoginAuthData): Promise<void> => {
        const { error }: Record<string, any > = await dispatch(loginByUsername(data)); // TODO нужно типпизировать диспатч
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
            onSubmit={handleLogin}
            focus={focus}
            formError={error}
        />
    );
};
