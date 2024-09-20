import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/model/consts/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorType } from 'shared/model/types/api';
import { ApiErrorTypes } from 'shared/model/consts/api';
import { LoginAuthData } from '../../types/loginSchema';

export const loginByUsername = createAsyncThunk<User, LoginAuthData, ThunkConfig<ApiErrorType>>(
    'loginForm/loginByUsername',
    async (authData, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.AUTH_ERROR));
        }
    },
);
