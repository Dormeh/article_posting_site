import { ChangeEvent, FC, ElementType, ReactNode, forwardRef, ForwardedRef } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { ValidateFunctionsType, ValidationType } from 'shared/config/validation/validation';
import { classNames } from 'shared/lib/classNames/classNames';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Text, TextTheme } from '../../Text/Text';
import cls from './Form.module.scss';

export interface IFormValue {
    // TODO протестировать
    [key: string]: string;
}

export type IFormInputs<T> = {
    // TODO протестировать
    [P in keyof T]: T[P];
};
export interface FormConfigType {
    name: string;
    label?: string;
    pattern?: ValidationType;
    validation?: ValidateFunctionsType;
    required?: boolean;
    value?: string;
    type?: string;
    placeholder?: string;
    Component: ElementType;
}

export interface LoginFormParams extends FieldValues {
    login: string;
    password?: string;
}

export enum FormOrientation {
    COLUMN = 'column',
    ROW = 'row',
}

interface IFormPros {
    className?: string;
    formTitle?: string;
    fields: FormConfigType[];
    data?: FieldValues;
    footer?: ReactNode;
    formError?: string;
    errors?: FieldErrors;
    focus?: boolean;
    control?: Control;
    readonly?: boolean;
    orientation?: FormOrientation;
}

export const Form = forwardRef((props: IFormPros, ref: ForwardedRef<HTMLFormElement>) => {
    const {
        formTitle,
        fields,
        data,
        footer,
        className,
        formError,
        errors,
        control,
        readonly,
        orientation = FormOrientation.COLUMN,
    } = props;

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault(); // для тестирования в Storybook и использования без react hook form
    };

    return (
        <div className={classNames(cls.formWrapper, {}, [className])}>
            {formTitle && <Text title={formTitle} className={cls.title} />}
            <form
                ref={ref}
                className={classNames(cls.form, {}, [cls[orientation]])}
                onSubmit={handleSubmit}
            >
                {fields &&
                    fields.map(({ Component, name, ...rest }) => (
                        <Component
                            key={name}
                            defaultValue={!control ? data?.[name] : undefined}
                            error={!!errors?.[name]?.message}
                            errorMessage={errors?.[name]?.message?.toString()}
                            name={name}
                            register={control?.register}
                            control={control}
                            readonly={readonly}
                            className={cls.field}
                            testId={name}
                            {...rest}
                        />
                    ))}
                {footer}
            </form>
            {formError && (
                <Text
                    className={classNames(cls.formError, {}, [cls[orientation]])}
                    text={formError}
                    theme={TextTheme.ERROR}
                />
            )}
        </div>
    );
});
