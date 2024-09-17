export enum ValidationType {
    Login = 'username',
    Password = 'password',
    Email = 'email',
    Phone = 'phone',
    Name = 'name',
    Age = 'age',
    Comment = 'comment',
}

export type ValidateFunctionsType = {
    setValueAs?: (arg0: string) => number;
    validate: (v: number) => boolean | string;
};

// TODO добавить переводы для валидации
export const errorsNames = {
    [ValidationType.Login]:
        '3-20 символов, допустимые символы: латин. буквы, цифры, дефис, подчеркивание _',
    [ValidationType.Password]: '8-40 символов, обязательно хотя бы одна заглавная буква и цифра',
    [ValidationType.Email]: 'Невалидный email',
    [ValidationType.Name]:
        'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
    [ValidationType.Phone]: '10-15 цифр, может начинаться с плюса',
    [ValidationType.Age]: 'возраст не больше 119 и не меньше 5, первая цифра больше 0',
    [ValidationType.Comment]: 'комментарий не должен быть пустым',
};

export const ValidationPattern = {
    username: {
        value: /^(?=.*\D)[\w-]{3,20}$/g,
        message: errorsNames[ValidationType.Login],
    },
    password: {
        // value: /^(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z!@#-$%^_&*]{8,40}$/g,
        value: /^.{3,40}$/g,
        message: errorsNames[ValidationType.Password],
    },
    email: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        message: errorsNames[ValidationType.Email],
    },
    name: {
        value: /^[A-Z|А-ЯË][A-ZА-ЯËa-zа-яё-]+$/g,
        message: errorsNames[ValidationType.Name],
    },
    phone: {
        value: /^[\d|+]\d{10,15}$/i,
        message: errorsNames[ValidationType.Phone],
    },
    age: {
        value: /^(110|1[0-1][0-9]|[5-9]|[1-9][0-9])$/i,
        message: 'возраст не больше 119 и не меньше 5, первая цифра больше 0',
    },
    comment: {
        value: /[A-ZА-ЯËa-zа-яё0-9]+/,
        message: errorsNames[ValidationType.Comment],
    },
};
