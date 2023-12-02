import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { LOCAL_STORAGE_USER_KEY } from 'shared/config/const/localstorage';

export const updateProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
    'profileFormEdit/updateProfileData',
    async (data, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.put<Profile>('/profile', data);

            if (!response.data) throw new Error('Ошибка получения данных');

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(e instanceof Error ? e.message : 'Ошибка обновления  данных профиля');
        }
    },
);
