import axios from 'axios';
import { ApiError, ApiErrorType, ApiErrorTypes } from './types';

export const apiErrorIdentify = (
    e: unknown,
    message?: ApiErrorTypes,
) => (axios.isAxiosError(e)
    ? e.response?.data
    : (e instanceof Error && e.message) || message) || ApiErrorTypes.UNKNOWN_SERVER_ERROR;
