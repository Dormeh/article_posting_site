import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/model/consts/api';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { getProfileCanEditMode } from '../../selectors/getProfileCanEditMode/getProfileCanEditMode';

export const updateProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
    'profileFormEdit/updateProfileData',
    async (updateData, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const profile = getProfileData(getState());
        const canEdit = getProfileCanEditMode(getState());

        if (!canEdit) {
            return rejectWithValue('Вы не можете редактировать этот профиль');
        }

        try {
            const response = await extra.api.put<Profile>(`/profiles/${profile?.id}`, updateData);

            if (!response.data) throw new Error('Ошибка получения данных');

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.PROFILE_UPDATE_ERROR));
        }
    },
);
