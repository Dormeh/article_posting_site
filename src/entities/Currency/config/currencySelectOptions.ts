import { Currency } from '../model/consts/consts';
import { CurrencySelectOption } from '../model/types/currency';

export const currencyOptions: CurrencySelectOption[] = [
    { value: Currency.RUB, label: Currency.RUB },
    { value: Currency.USD, label: Currency.USD },
    { value: Currency.EUR, label: Currency.EUR },
];
