export enum Currency {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',
}

export interface CurrencySelectOption {
    value: Currency;
    label: Currency;
}
