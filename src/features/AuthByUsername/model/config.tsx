import { ValidationType } from 'shared/config/validation/validation';
import { formChildNodes } from 'shared/ui/Form/model/formChildNodes';

export const authFormFields = [
    {
        name: 'username',
        label: 'Логин',
        pattern: ValidationType.Login,
        required: true,
        type: 'text',
        Component: formChildNodes.Input,
    },
    {
        name: 'password',
        label: 'Пароль',
        pattern: ValidationType.Password,
        required: true,
        type: 'password',
        Component: formChildNodes.Input,
    },
];

export const authFormConfig = {
    formTitle: 'Авторизация',
    fields: authFormFields,
};
