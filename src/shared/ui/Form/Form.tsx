import {
    FC, ReactNode, useEffect,
} from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Input } from 'shared/ui/Input/Input';
import { ValidationType } from 'shared/constants/validation';
import { classNames } from 'shared/lib/classNames/classNames';
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
    focus?: boolean
}

export const Form: FC<IFormPros> = (props) => {
    const {
        formTitle,
        fields,
        footer,
        onSubmit,
        focus,
        className,
    } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setFocus,
        clearErrors,
    } = useForm<IFormInputs<IFormValue>>({
        mode: 'onChange',
    });

    const onSubmitReset: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        reset();
    };

    useEffect(() => {
        setFocus(fields[0].name);
        clearErrors();
    }, [clearErrors, fields, focus, setFocus]);

    return (
        <div className={classNames(cls.formWrapper, {}, [className])}>
            <h3 className={cls.title}>{formTitle}</h3>
            <form
                className={cls.form}
                onSubmit={handleSubmit(onSubmitReset)}
            >
                {fields && fields
                    .map(
                        ({ name, ...otherProps }) => (
                            <Input
                                key={`input-${name}`}
                                register={register}
                                error={!!errors[name]?.message}
                                errorMessage={errors[name]?.message?.toString()}
                                name={name}
                                {...otherProps}
                            />
                        ),
                    )}
                {footer}
            </form>
        </div>
    );
};
