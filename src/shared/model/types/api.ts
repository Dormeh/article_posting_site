import { ApiErrorTypes } from '../consts/api';

export interface ApiError {
    message: string;
}

export type ApiErrorType = ApiError | ApiErrorTypes;
