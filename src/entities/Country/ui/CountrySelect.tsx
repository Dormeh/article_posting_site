import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { countryOptions } from '../model/config/options';

export const CountrySelect = () => {
    const { t } = useTranslation();

    return (
        <Select
            options={countryOptions}
            placeholder={t('Выберите страну')}
        />
    );
};
