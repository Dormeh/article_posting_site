import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profileFormEdit/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>(`/profiles/${profileId}`);

            if (!response.data?.id) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            // dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.PROFILE_GET_ERROR));
        }
    },
);
