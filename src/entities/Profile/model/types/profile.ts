import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface Profile {
    id?: string;
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    email: string;
    phone: string;
    username: string;
    avatar?: string;
}
