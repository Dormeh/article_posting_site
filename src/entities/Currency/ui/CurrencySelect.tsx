import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { currencyOptions } from '../config/currencySelectOptions';

interface CurrencySelectProps {
    name?: string;
    className?: string;
    label?: string
}
export const CurrencySelect:FC<CurrencySelectProps> = ({ name = 'currency', ...otherProps }) => {
    const { t } = useTranslation();
    return (
        <Select
            name={name}
            options={currencyOptions}
            placeholder={t('Выберите валюту')}
            {...otherProps}
        />
    );
};
