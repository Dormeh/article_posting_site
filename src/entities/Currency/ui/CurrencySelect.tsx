import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { currencyOptions } from 'entities/Currency/model/config/options';

export const CurrencySelect = () => {
    const { t } = useTranslation();

    return (
        <Select
            options={currencyOptions}
            placeholder={t('Выберите валюту')}
        />
    );
};
