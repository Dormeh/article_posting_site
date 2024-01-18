import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Article } from 'entities/Article/model/types/article';

export const fetchArticlesList = createAsyncThunk<Article[], string, ThunkConfig<string>>(
    'ArticlePage/fetchArticlePageData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Article[]>('');

            if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.COMMENT_GET_ERROR));
        }
    },
);
