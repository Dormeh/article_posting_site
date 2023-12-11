import axios from 'axios';
import { ApiErrorTypes } from './types';

export const apiErrorIdentify = (
    e: unknown,
    message?: string,
) => (axios.isAxiosError(e) ? e.response?.data : message) || ApiErrorTypes.UNKNOWN_SERVER_ERROR;
