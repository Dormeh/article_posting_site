import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageIsInit,
    getArticlesPageSortData,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'ArticlePage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            dispatch, getState,
        } = thunkAPI;
        const isInit = getArticlesPageIsInit(getState());

        if (!isInit) {
            const stateSortParams = getArticlesPageSortData(getState());
            const newSortParams = { ...stateSortParams };
            Object.keys(stateSortParams).forEach((key) => {
                newSortParams[key] = searchParams.get(key) || stateSortParams[key];
            });
            dispatch(articlesPageActions.setPageSortParams(newSortParams));
            dispatch(articlesPageActions.initPageState());
            await dispatch(fetchArticlesList({})); // Ждем результата для тестирования
        }
    },
);
