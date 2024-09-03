import { ValidationType } from 'shared/config/validation/validation';
import { formChildNodes } from 'shared/ui/Form/model/formChildNodes';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';
import { FormConfigType } from 'shared/ui/Form/ui/Form';

export const profileConfig: FormConfigType[] = [
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
        validation: {
            setValueAs: (v: string) => parseInt(v, 10),
            validate: (v: number) =>
                (v > 5 && v <= 100) || 'возраст не больше 119 и не меньше 5, первая цифра больше 0',
        },
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
