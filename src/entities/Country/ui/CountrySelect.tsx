import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { countryOptions } from '../config/countrySelectOptions';

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
