import { ApiErrorType } from 'shared/model/types/api';
import { ApiErrorTypes } from 'shared/model/consts/api';

export const rejectedPayloadHandle = (payload: ApiErrorType | undefined) =>
    (typeof payload === 'object' ? payload.message : payload) || ApiErrorTypes.UNKNOWN_SERVER_ERROR;
