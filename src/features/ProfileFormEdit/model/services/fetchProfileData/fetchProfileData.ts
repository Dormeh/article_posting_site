import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { LOCAL_STORAGE_USER_KEY } from 'shared/config/const/localstorage';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profileFormEdit/fetchProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            // dispatch(userActions.setAuthData(response.data));
            // extra.navigate(RouterPath.profile);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.PROFILE_GET_ERROR));
        }
    },
);
