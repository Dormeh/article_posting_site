import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localstorage';
import { LoginAuthData } from '../../types/loginSchema';

export const loginByUsername = createAsyncThunk<User, LoginAuthData, { rejectValue: string}>(
    'loginForm/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) throw new Error('Ошибка получения данных');

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return thunkAPI.rejectWithValue(e.message || 'Ошибка авторизации');
        }
    },
);
