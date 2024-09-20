import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { Article } from 'entities/Article/model/types/article';
import { ApiErrorTypes } from 'shared/model/consts/api';

export const fetchRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'ArticleDetailsPage/fetchRecommendations',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/recommendations', {
                params: {
                    _expand: 'profile',
                    _limit: 6,
                },
            });

            if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            return response.data;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.ARTICLES_GET_ERROR));
        }
    },
);
