export enum ValidationType {
    Login = 'username',
    Password = 'password',
    Email = 'email',
    Phone = 'phone',
    Name = 'name',
    Age = 'age',
    Comment = 'comment'
}
// TODO добавить переводы для валидации
export const ValidationPattern = {
    username: {
        value: /^(?=.*\D)[\w-]{3,20}$/g,
        message:
            '3-20 символов, допустимые символы: латин. буквы, цифры, дефис, подчеркивание _',
    },
    password: {
        // value: /^(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z!@#-$%^_&*]{8,40}$/g,
        value: /^.{3,40}$/g,
        message: '8-40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
    email: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        message: 'Невалидный email',
    },
    name: {
        value: /^[A-Z|А-ЯË][A-ZА-ЯËa-zа-яё-]+$/g,
        message:
            'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
    },
    phone: {
        value: /^[\d|+]\d{10,15}$/i,
        message: '10-15 цифр, может начинаться с плюса',
    },
    age: {
        value: /^(110|1[0-1][0-9]|[5-9]|[1-9][0-9])$/i,
        message: 'возраст не больше 119 и не меньше 5, первая цифра больше 0',
    },
    comment: {
        value: /[A-ZА-ЯËa-zа-яё0-9]+/,
        message: 'комментарий не должен быть пустым',
    },
};
