import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { Article } from 'entities/Article/model/types/article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'entities/Article/model/consts/consts';
import { ApiErrorTypes } from 'shared/model/consts/api';
import {
    getArticlesCount,
    getArticlesPageLimit,
    getArticlesPageSortData,
} from '../../selectors/getArticlesPageSelectors/getArticlesPageSelectors';

interface FetchArticlesListProps {
    refreshList?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('ArticlePage/fetchArticlePageData', async ({ refreshList }, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const articlesCount = getArticlesCount(getState());
    const sortData = getArticlesPageSortData(getState());
    addQueryParams(sortData);
    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'profile',
                _start: refreshList ? 0 : articlesCount,
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
