import { ValidationType } from 'shared/ui/Form/validation/validation';
import { formChildNodes } from 'shared/ui/Form/model/formChildNodes';

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
    // {
    //     name: 'email',
    //     label: 'Email',
    //     pattern: ValidationType.Email,
    //     required: true,
    //     type: 'email',
    //     Component: formChildNodes.input,
    // },
    // {
    //     name: 'phone',
    //     label: 'Телефон',
    //     pattern: ValidationType.Phone,
    //     required: true,
    //     type: 'tel',
    //     Component: formChildNodes.input,
    // },
    {
        name: 'age',
        label: 'Возраст',
        pattern: ValidationType.Age,
        required: true,
        type: 'number',
        Component: formChildNodes.Input,
    },
    {
        name: 'currency',
        label: 'Валюта',
        Component: formChildNodes.Select,
    },
    {
        name: 'country',
        label: 'Страна',
        Component: formChildNodes.Select,
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
    {
        name: 'avatar',
        label: 'Аватар',
        type: 'text',
        Component: formChildNodes.Input,
    },
];
