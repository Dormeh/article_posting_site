import React, { FC, TextareaHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { UseFormRegister } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { ValidationPattern, ValidationType } from 'shared/ui/Form/validation/validation';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    register?: UseFormRegister<FieldValues>;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    required?: boolean;
    pattern?: ValidationType;
    placeholder?: string;
    className?: string;
    type?: string;
}

export const Textarea: FC<TextareaProps> = (props) => {
    const {
        className,
        label = 'text',
        rows = 4,
        placeholder = 'Введите текст',
        type,
        name,
        pattern,
        register,
        error,
        errorMessage,
        required,
        maxLength = 255,
        ...otherProps
    } = props;

    const options = {
        ...(pattern && { pattern: ValidationPattern[pattern] }),
    };

    const { t } = useTranslation();
    return (
        <div className={cls.Textarea}>
            <textarea
                {...register?.(name, options)}
                id={label}
                rows={rows}
                placeholder={placeholder}
                className={classNames(cls.input, {}, [className])}
                maxLength={maxLength}
            />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    className={cls.error}
                    text={errorMessage}
                    align={TextAlign.CENTER}
                />
            )}
        </div>

    );
};
