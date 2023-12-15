import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Article } from '../../types/Article';

export const fetchArticleData = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'profileFormEdit/fetchProfileData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`/articles/${id}`);

            if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            // dispatch(userActions.setAuthData(response.data));
            // extra.navigate(RouterPath.profile);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.ARTICLE_GET_ERROR));
        }
    },
);
