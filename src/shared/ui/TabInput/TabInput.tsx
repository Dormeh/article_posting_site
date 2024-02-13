import React, { InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { UseFormRegister } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import cls from './TabInput.module.scss';

interface TabInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name: string;
    register?: UseFormRegister<FieldValues>;
    label?: string
}

export const TabInput = (props: TabInputProps) => {
    const {
        className,
        name,
        register,
        label,
        value,
        defaultChecked,
        style,
        readOnly,
        id,
    } = props;
    const { t } = useTranslation();

    return (
        <label htmlFor={id} className={className}>
            <input
                id={id}
                name={name}
                {...register?.(name)}
                type="radio"
                className={cls.radioInput}
                value={value}
                defaultChecked={defaultChecked}
                disabled={readOnly}
            />
            <Card className={cls.tabBox} style={style}>
                <Text className={cls.tabTitle} text={t(label || '')} />
            </Card>
        </label>
    );
};
