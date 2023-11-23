import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { Control } from 'react-hook-form';
import { FC } from 'react';
import { countryOptions } from '../model/config/options';

interface CountrySelectProps {
    control?: Control;
}
export const CountrySelect:FC<CountrySelectProps> = ({ control }) => {
    const { t } = useTranslation();

    return (
        <Select
            name="country"
            control={control}
            options={countryOptions}
            placeholder={t('Выберите страну')}
        />
    );
};
