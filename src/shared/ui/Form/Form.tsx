import React, { FC, ReactNode } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Input } from 'shared/ui/Input/Input';
import { ValidationType } from 'shared/config/validation/validation';
import { classNames } from 'shared/lib/classNames/classNames';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
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
    required: boolean;
    value?: string;
    type: string;
    placeholder?: string;
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
    onSubmit?: (data: FieldValues) => void
    formError?: string;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors

}

export const Form: FC<IFormPros> = (props) => {
    const {
        formTitle,
        fields,
        footer,
        onSubmit,
        className,
        formError,
        register,
        errors,
    } = props;

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault(); // для тестирования в сторибуке и использования без react hook form
        onSubmit?.(event);
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
                        ({ name, ...otherProps }) => (
                            <Input
                                key={`input-${name}`}
                                register={register}
                                error={!!errors?.[name]?.message}
                                errorMessage={errors?.[name]?.message?.toString()}
                                name={name}
                                {...otherProps}
                            />
                        ),
                    )}
                {footer}
            </form>
            {formError && <Text text={formError} theme={TextTheme.ERROR} />}
        </div>
    );
};
