import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Comment } from 'entities/Comment';

export const fetchArticleComments = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleComment/fetchArticleComments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Comment[]>('/comments/', {
                params: {
                    articleId,
                    _expand: 'profile',
                },
            });

            if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.ARTICLE_GET_ERROR));
        }
    },
);
