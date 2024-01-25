import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Article } from 'entities/Article/model/types/article';
import {
    getArticlesPageLimit, getArticlesPagePage,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { useSelector } from 'react-redux';
import { getArticlesSelector } from 'pages/ArticlesPage/model/slice/articlesPageSlice';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'ArticlePage/fetchArticlePageData',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPagePage(getState());
        const articles = getArticlesSelector.selectAll(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'profile',
                    _start: articles.length,
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
