import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/images/storybook.jpg';

export const testProfileData = {
    id: '1',
    first: 'Тимур',
    lastname: 'Ульби',
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg,
    email: 'adf@azdaf.ru',
    phone: '13131321321321',
};
