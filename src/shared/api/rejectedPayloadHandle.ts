import { ApiErrorType, ApiErrorTypes } from './types';

export const rejectedPayloadHandle = (payload: ApiErrorType | undefined) => (
    typeof payload === 'object'
        ? payload.message
        : payload)
    || ApiErrorTypes.UNKNOWN_SERVER_ERROR;
