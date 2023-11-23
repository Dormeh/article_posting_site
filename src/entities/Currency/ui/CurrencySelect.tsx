import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { currencyOptions } from 'entities/Currency/model/config/options';
import { Control } from 'react-hook-form';
import { FC } from 'react';

interface CurrencySelectProps {
    control?: Control;
}
export const CurrencySelect:FC<CurrencySelectProps> = ({ control }) => {
    const { t } = useTranslation();

    return (
        <Select
            control={control}
            name="currency"
            options={currencyOptions}
            placeholder={t('Выберите валюту')}
        />
    );
};
