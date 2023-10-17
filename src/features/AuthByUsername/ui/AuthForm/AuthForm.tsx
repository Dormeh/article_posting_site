import { classNames } from 'shared/lib/classNames/classNames';
import { Form } from 'shared/ui/Form/Form';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AuthForm.module.scss';
import { authFormConfig } from './config';

interface AuthFormProps {
    authConfig: typeof authFormConfig
    formClose: () => void;
    className?: string;
    focus?: boolean;
}
export const AuthForm = (props: AuthFormProps) => {
    const {
        authConfig: {
            formTitle,
            fields,
        },
        className,
        formClose,
        focus,
    } = props;
    const handleLogin = (data: FieldValues): void => {
        formClose();// TODO нужно добавить экшен авторизации и если удачно закрыть форму
        console.log(data);
    };

    const errorCancel = () => { // TODO для сброса состояния
    };

    const [t] = useTranslation();
    const footer = (
        <Button
            className={cls.authBtn}
            type="submit"
            theme={ButtonTheme.BACKGROUND_INVERTED}
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
        />
    );
};
