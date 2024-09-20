import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { Comment } from 'entities/Comment';
import { ApiErrorTypes } from 'shared/model/consts/api';

export const fetchArticleComments = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleComment/fetchArticleComments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
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
