import { PayloadAction } from '@reduxjs/toolkit';
import { ApiErrorType, ApiErrorTypes } from 'shared/api/types';

export const rejectedPayloadHandle = (payload: ApiErrorType | undefined) => (
    typeof payload === 'object'
        ? payload.message
        : payload)
    || ApiErrorTypes.UNKNOWN_SERVER_ERROR;
