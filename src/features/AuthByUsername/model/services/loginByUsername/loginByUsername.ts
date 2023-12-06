import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/config/const/localstorage';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { LoginAuthData } from '../../types/loginSchema';

export const loginByUsername = createAsyncThunk<User, LoginAuthData, ThunkConfig<string>>(
    'loginForm/loginByUsername',
    async (authData, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.post('/login', authData);

            if (!response.data) throw new Error('Ошибка получения данных');

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.(RouterPath.profile);// пока оставил как было, но в сторе сейчас нет navigate (убрал из-за обновления ссылки при useNavigate)

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(e instanceof Error ? e.message : 'Ошибка авторизации');
        }
    },
);
