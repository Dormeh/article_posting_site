import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/images/storybook.jpg';
import { Profile } from 'entities/Profile';
import { errorsNames, ValidationType } from 'shared/config/validation/validation';

export const testProfileData: Profile = {
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

export const testProfileDataWithoutImg = { ...testProfileData };
testProfileDataWithoutImg.avatar = '';
export const testProfileWrongData = {
    first: 'иван',
    lastname: 'иванов',
    age: '2',
    city: 'город',
    username: 'a',
    email: 'aaa',
    phone: '123',
};
export const testProfileAnotherData = {
    id: '1',
    first: 'Иван',
    lastname: 'Другой',
    age: 21,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Gluhovo',
    username: 'user001',
    avatar: '',
    email: 'adf001@azdaf.ru',
    phone: '58931321321305',
};
export const profileErrorsArr = {
    first: errorsNames[ValidationType.Name],
    lastname: errorsNames[ValidationType.Name],
    age: errorsNames[ValidationType.Age],
    city: errorsNames[ValidationType.Name],
    username: errorsNames[ValidationType.Login],
    email: errorsNames[ValidationType.Email],
    phone: errorsNames[ValidationType.Phone],
};
