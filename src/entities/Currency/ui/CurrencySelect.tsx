import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { currencyOptions } from 'entities/Currency/model/config/options';
import { Control } from 'react-hook-form';
import { FC } from 'react';

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
