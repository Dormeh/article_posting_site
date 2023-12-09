import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/Article';

export const fetchArticleData = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'profileFormEdit/fetchProfileData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`/articles/${id}`);

            if (!response.data) throw new Error('Ошибка получения данных');

            // dispatch(userActions.setAuthData(response.data));
            // extra.navigate(RouterPath.profile);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(e instanceof Error ? e.message : 'Ошибка данных статьи');
        }
    },
);
