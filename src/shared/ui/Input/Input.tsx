import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ValidationPattern, ValidationType } from 'shared/config/validation/validation';
import { useTranslation } from 'react-i18next';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import cls from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
}

export const Input = memo((props: InputProps) => {
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
        ...otherProps
    } = props;

    const options = {
        ...(required && { required: 'Поле не должно быть пустым' }),
        ...(pattern && { pattern: ValidationPattern[pattern] }),
    };

    const [t] = useTranslation();

    const [caretPosition, setCaretPosition] = useState(0);

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.selectionStart || 0);
    };
    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.value.length);
    };

    return (
        <label
            className={classNames(cls.label, {}, [className])}
            htmlFor={name}
        >
            <span className={cls.placeholder}>{label && `${t(label)}> `}</span>

            <div className={cls.caretWrapper}>
                <input
                    {...register?.(name, options)}
                    placeholder={placeholder || ''}
                    type={type}
                    className={cls.input}
                    onSelect={onSelect}
                    maxLength={maxLength}
                    {...otherProps}
                    onInput={onInput}
                />
                <span
                    className={cls.caret}
                    style={{
                        left: `${caretPosition * 8.8}px`,
                    }}
                />

                {error && (
                    <p
                        className={cls.error}
                    >
                        { errorMessage }
                    </p>
                )}
            </div>
        </label>
    );
});
