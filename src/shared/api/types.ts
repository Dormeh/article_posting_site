export enum ApiErrorTypes {
    UNKNOWN_SERVER_ERROR = 'Неизвестная ошибка сервера',
    AUTH_ERROR = 'Ошибка авторизации',
    PROFILE_GET_ERROR = 'Ошибка получения профиля',
    PROFILE_UPDATE_ERROR = 'Ошибка обновления профиля',
}

interface ApiError {
    message: string;
}

export type ApiErrorType = ApiError | string;
