import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore, getArticlesPageIsInit,
    getArticlesPageIsLoading,
    getArticlesPagePage,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'ArticlePage/initArticlesPage',
    async (_, thunkAPI) => {
        const {
            dispatch, getState,
        } = thunkAPI;
        const isInit = getArticlesPageIsInit(getState());
        if (!isInit) {
            dispatch(articlesPageActions.initPageState());
            await dispatch(fetchArticlesList()); // Ждем результата для тестирования
        }
    },
);
