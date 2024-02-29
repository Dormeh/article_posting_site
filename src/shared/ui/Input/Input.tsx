import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, useState,
} from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ValidationPattern, ValidationType } from 'shared/ui/Form/validation/validation';
import { useTranslation } from 'react-i18next';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { ChangeHandler } from 'react-hook-form/dist/types/form';
import cls from './Input.module.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'onChange'> {
    name: string;
    register?: UseFormRegister<FieldValues>;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    required?: boolean;
    pattern?: ValidationType;
    placeholder?: string;
    className?: string;
    type: string;
    readonly?: boolean;
    onChange?: (value: ((...args: any[]) => void) | string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
    const {
        name,
        label,
        register,
        required,
        error,
        errorMessage,
        pattern,
        placeholder,
        className,
        type,
        maxLength = 20,
        readonly,
        onChange,
        ...otherProps
    } = props;

    const [t] = useTranslation();

    const options = {
        ...(required && { required: 'Поле не должно быть пустым' }),
        ...(pattern && { pattern: ValidationPattern[pattern] }),
    };

    const [caretPosition, setCaretPosition] = useState(0);

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.selectionStart || 0);
    };
    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'tel') {
            e.target.value = e.target.value.replace(/\D/, '');
        }
        setCaretPosition(e.target.value.length);
    };

    const { onChange: registerChange, ...registerProps } = { ...register?.(name, options) };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const { target: { value } } = e;
            onChange(registerChange || value, e);
        } else registerChange?.(e);
    };

    return (
        <label
            className={classNames(cls.label, {}, [className])}
            htmlFor={name}
        >
            <span className={cls.placeholder}>{label && `${t(label)}> `}</span>

            <div className={cls.caretWrapper}>
                <input
                    {...registerProps}
                    placeholder={placeholder || ''}
                    type={type}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onSelect={onSelect}
                    maxLength={maxLength}
                    onInput={onInput}
                    readOnly={readonly}
                    {...otherProps}
                />
                {!readonly && (
                    <span
                        className={cls.caret}
                        style={{
                            left: `${caretPosition * 8.8}px`,
                        }}
                    />
                )}

                {error && (
                    <p
                        className={cls.error}
                    >
                        {t(errorMessage || '')}
                    </p>
                )}
            </div>
        </label>
    );
};
