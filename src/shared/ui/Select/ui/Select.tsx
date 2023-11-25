import { useMemo } from 'react';
import ReactSelect from 'react-select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import './Select.scss';
import { Control, Controller } from 'react-hook-form';
import { ValidationPattern, ValidationType } from 'shared/ui/Form/validation/validation';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CustomSelectProps, IOption } from '../model/types/types';

export interface SelectProps extends CustomSelectProps {
    name: string;
    className?: string;
    control?: Control;
    required?: boolean;
    pattern?: ValidationType;
    placeholder?: string;
    options: IOption[];
    readonly?: boolean;
    label?: string
}

export const Select = (props: SelectProps) => {
    const {
        name,
        className,
        control,
        required,
        pattern,
        options,
        readonly,
        label,
        ...otherProps
    } = props;

    const { t } = useTranslation();

    const ruleOptions = useMemo(() => ({
        ...(required && { required: 'Поле не должно быть пустым' }),
        ...(pattern && { pattern: ValidationPattern[pattern] }),
    }), [pattern, required]);

    return (
        <div className={classNames('Select', {}, [className])}>
            {label
                && (
                    <label
                        htmlFor={name}
                        className="Select__label"
                    >
                        <Text text={t(label)} size={TextSize.S} />
                    </label>
                )}
            { control
                ? (
                    <Controller
                        control={control}
                        name={name}
                        rules={ruleOptions}
                        render={({ field }) => (
                            <ReactSelect
                                {...field}
                                id={name}
                                classNamePrefix="Select"
                                options={options}
                                isDisabled={readonly}
                                {...otherProps}
                            />
                        )}
                    />
                )
                : (
                    <ReactSelect
                        id={name}
                        classNamePrefix="Select"
                        isDisabled={readonly}
                        options={options}
                        {...otherProps}
                    />
                )}
        </div>
    );
};
