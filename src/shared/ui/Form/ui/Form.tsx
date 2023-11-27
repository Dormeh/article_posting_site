import {
    ElementType, FC, memo, ReactNode,
} from 'react';
import {
    Control, FieldValues, UseFormHandleSubmit, UseFormRegister,
} from 'react-hook-form';
import { ValidationType } from 'shared/ui/Form/validation/validation';
import { classNames } from 'shared/lib/classNames/classNames';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from 'entities/Profile';
import { User } from 'entities/User';
import cls from './Form.module.scss';

export interface IFormValue { // TODO протестировать
    [key: string]: string;
}

export type IFormInputs<T> = { // TODO протестировать
    [P in keyof T]: T[P];
}
export interface FormConfigType {
    name: string;
    label: string;
    pattern?: ValidationType;
    required?: boolean;
    value?: string;
    type?: string;
    placeholder?: string;
    Component: ElementType
}

export interface LoginFormParams extends FieldValues {
    login: string;
    password?: string;
}

interface IFormPros {
    className?: string
    formTitle?: string
    fields: FormConfigType[]
    footer?: ReactNode
    formError?: string;
    errors?: FieldErrors
    focus?: boolean;
    control?: Control;
    readonly?: boolean;
}

export const Form: FC<IFormPros> = (props) => {
    const {
        formTitle,
        fields,
        footer,
        className,
        formError,
        errors,
        control,
        readonly,
    } = props;

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();// для тестирования в Storybook и использования без react hook form
    };

    return (
        <div className={classNames(cls.formWrapper, {}, [className])}>
            <Text title={formTitle} className={cls.title} />
            <form
                className={cls.form}
                onSubmit={handleSubmit}
            >
                {fields && fields
                    .map(
                        ({ Component, name, ...rest }) => (
                            <Component
                                key={name}
                                error={!!errors?.[name]?.message}
                                errorMessage={errors?.[name]?.message?.toString()}
                                name={name}
                                register={control?.register}
                                control={control}
                                readonly={readonly}
                                {...rest}
                            />
                        ),
                    )}
                {footer}
            </form>
            {formError && <Text text={formError} theme={TextTheme.ERROR} />}
        </div>
    );
};
