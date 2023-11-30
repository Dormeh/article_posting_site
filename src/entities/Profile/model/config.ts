import { ValidationType } from 'shared/ui/Form/validation/validation';
import { formChildNodes } from 'shared/ui/Form/model/formChildNodes';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';

export const profileConfig = [
    {
        name: 'first',
        label: 'Имя',
        pattern: ValidationType.Name,
        required: true,
        type: 'text',
        Component: formChildNodes.Input,
    },
    {
        name: 'lastname',
        label: 'Фамилия',
        pattern: ValidationType.Name,
        required: true,
        type: 'text',
        Component: formChildNodes.Input,
    },
    {
        name: 'email',
        label: 'Почта',
        pattern: ValidationType.Email,
        required: true,
        type: 'text',
        Component: formChildNodes.Input,
    },
    {
        name: 'phone',
        label: 'Телефон',
        pattern: ValidationType.Phone,
        required: true,
        type: 'tel',
        Component: formChildNodes.Input,
    },
    {
        name: 'age',
        label: 'Возраст',
        pattern: ValidationType.Age,
        required: true,
        type: 'tel',
        Component: formChildNodes.Input,
    },
    {
        name: 'currency',
        label: 'Валюта',
        Component: CurrencySelect,
    },
    {
        name: 'country',
        label: 'Страна',
        Component: CountrySelect,
    },
    {
        name: 'city',
        label: 'Город',
        pattern: ValidationType.Name,
        required: true,
        type: 'text',
        Component: formChildNodes.Input,
    },
    {
        name: 'username',
        label: 'Логин',
        pattern: ValidationType.Login,
        required: true,
        type: 'text',
        Component: formChildNodes.Input,
    },
];
