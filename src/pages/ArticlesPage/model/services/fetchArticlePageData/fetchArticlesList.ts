import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Article } from 'entities/Article/model/types/article';
import {
    getArticlesPageLimit,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';

export const fetchArticlesList = createAsyncThunk<Article[], number, ThunkConfig<string>>(
    'ArticlePage/fetchArticlePageData',
    async (page, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'profile',
                    _page: page,
                    _limit: limit,
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
