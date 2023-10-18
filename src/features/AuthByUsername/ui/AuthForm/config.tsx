import { ValidationType } from 'shared/config/validation/validation';

const authFormFields = [
    {
        name: 'login',
        label: 'Логин',
        pattern: ValidationType.Login,
        required: true,
        type: 'text',
    },
    {
        name: 'password',
        label: 'Пароль',
        pattern: ValidationType.Password,
        required: true,
        type: 'password',
    },
];

export const authFormConfig = {
    formTitle: 'Авторизация',
    fields: authFormFields,
};
