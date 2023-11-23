import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import ReactSelect from 'react-select';
import './Select.scss';
import { Control, Controller } from 'react-hook-form';
import { ValidationPattern, ValidationType } from 'shared/ui/Form/validation/validation';
import { useCallback } from 'react';
import { CustomSelectProps, IOption } from '../model/types/types';

export interface SelectProps extends CustomSelectProps {
    name: string;
    className?: string;
    control?: Control;
    required?: boolean;
    pattern?: ValidationType;
    placeholder?: string;
    options: IOption[];
}

export const Select = (props: SelectProps) => {
    const {
        name,
        className,
        control,
        required,
        pattern,
        options,
        ...otherProps
    } = props;
    const { t } = useTranslation();
    const ruleOptions = {
        ...(required && { required: 'Поле не должно быть пустым' }),
        ...(pattern && { pattern: ValidationPattern[pattern] }),
    };

    const getValue = useCallback((value: string) => options.find(
        (option) => option.value === value,
    ), [options]);
    return (
        control
            ? (
                <Controller
                    control={control}
                    name={name}
                    rules={ruleOptions}
                    render={({ field: { name, value, onChange }, fieldState: { error } }) => (
                        <ReactSelect
                            onChange={onChange}
                            value={getValue(value)}
                            className={classNames('Select', {}, [className])}
                            classNamePrefix="Select"
                            options={options}
                            {...otherProps}
                        />
                    )}
                />
            )
            : (
                <ReactSelect
                    className={classNames('Select', {}, [className])}
                    classNamePrefix="Select"
                    {...otherProps}
                />
            )
    );
};
