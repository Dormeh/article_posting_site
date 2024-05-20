import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Article, ArticleType } from 'entities/Article/model/types/article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPagePage,
    getArticlesPageSortData,
} from '../../selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { getArticlesSelector } from '../../slice/articlesPageSlice';

interface FetchArticlesListProps {
    refreshList?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('ArticlePage/fetchArticlePageData', async ({ refreshList }, thunkAPI) => {
    const { rejectWithValue, extra, dispatch, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPagePage(getState());
    const articles = getArticlesSelector.selectAll(getState());
    const sortData = getArticlesPageSortData(getState());
    addQueryParams(sortData);
    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'profile',
                _start: refreshList ? 0 : articles.length,
                _limit: limit,
                _sort: sortData.sort,
                _order: sortData.order,
                q: sortData.search,
                type: sortData.type === ArticleType.ALL ? null : sortData.type,
            },
        });

        if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

        return response.data;
    } catch (e) {
        if (__IS_DEV__) console.log(e);
        return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.ARTICLES_GET_ERROR));
    }
});
