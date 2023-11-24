import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { Control } from 'react-hook-form';
import { FC } from 'react';
import { countryOptions } from '../model/config/options';

interface CountrySelectProps {
    name?: string
    className?: string;
    label?: string
}
export const CountrySelect:FC<CountrySelectProps> = ({ name = 'country', ...otherProps }) => {
    const { t } = useTranslation();
    return (
        <Select
            name={name}
            options={countryOptions}
            placeholder={t('Выберите страну')}
            {...otherProps}
        />
    );
};
