import { CSSProperties, memo, useCallback, useMemo } from 'react';
import ReactSelect from 'react-select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import './Select.scss';
import { Control, Controller } from 'react-hook-form';
import { ValidationPattern, ValidationType } from 'shared/config/validation/validation';
import { Text, TextSize } from '../../Text/Text';
import type { CustomSelectProps, IOption } from '../model/types/types';

export enum SelectLabelView {
    TOP = 'labelTop',
    LEFT = 'labelLeft',
}

type SelectLabelSize = TextSize;

export interface SelectProps extends CustomSelectProps {
    name: string;
    className?: string;
    control?: Control;
    required?: boolean;
    pattern?: ValidationType;
    placeholder?: string;
    options: IOption[];
    readonly?: boolean;
    label?: string;
    defaultValue?: string;
    labelView?: SelectLabelView;
    selectLabelSize?: SelectLabelSize;
    style?: CSSProperties | undefined;
    labelTextClass?: string;
}

export const Select = memo((props: SelectProps) => {
    const {
        name,
        className,
        control,
        required,
        pattern,
        options,
        readonly,
        label,
        defaultValue,
        labelView = SelectLabelView.LEFT,
        selectLabelSize = TextSize.S,
        style,
        labelTextClass,
        ...otherProps
    } = props;

    const { t } = useTranslation();

    const ruleOptions = useMemo(
        () => ({
            ...(required && { required: 'Поле не должно быть пустым' }),
            ...(pattern && { pattern: ValidationPattern[pattern] }),
        }),
        [pattern, required],
    );

    const getOption = useCallback(
        (value: string | undefined) => options.find((option) => option.value === value),
        [options],
    );

    return (
        <label style={style} htmlFor={name} className={classNames('Select', {}, [className])}>
            {label && (
                <Text
                    className={classNames('Select__label', {}, [labelView])}
                    title={labelView === SelectLabelView.LEFT ? `${t(label)}>` : undefined}
                    text={labelView === SelectLabelView.TOP ? t(label) : undefined}
                    size={selectLabelSize}
                    titleClassName={labelTextClass}
                />
            )}
            {control ? (
                <Controller
                    control={control}
                    name={name}
                    rules={ruleOptions}
                    render={({ field: { value, onChange, ...rest } }) => (
                        <ReactSelect
                            value={getOption(value)}
                            onChange={(optionValue) => onChange(optionValue?.value)}
                            {...rest}
                            classNamePrefix="Select"
                            options={options}
                            isDisabled={readonly}
                            {...otherProps}
                        />
                    )}
                />
            ) : (
                <ReactSelect
                    name={name}
                    classNamePrefix="Select"
                    isDisabled={readonly}
                    options={options}
                    defaultValue={getOption(defaultValue)}
                    {...otherProps}
                />
            )}
        </label>
    );
});
