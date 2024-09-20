import axios from 'axios';

import { ApiErrorTypes } from 'shared/model/consts/api';

export const apiErrorIdentify = (e: unknown, message?: ApiErrorTypes) =>
    (axios.isAxiosError(e)
        ? e.response?.data.message || message
        : (e instanceof Error && e.message) || message) || ApiErrorTypes.UNKNOWN_SERVER_ERROR;
