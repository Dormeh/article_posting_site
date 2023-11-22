import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) throw new Error('Ошибка получения данных');

            // dispatch(userActions.setAuthData(response.data));
            // extra.navigate(RouterPath.profile);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(e instanceof Error ? e.message : 'Ошибка данных профиля');
        }
    },
);
