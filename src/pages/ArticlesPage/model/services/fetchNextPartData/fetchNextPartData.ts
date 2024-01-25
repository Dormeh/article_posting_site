import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePage,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const fetchNextPartData = createAsyncThunk<void, void, ThunkConfig<string>>(
    'ArticlePage/fetchNextPartData',
    async (_, thunkAPI) => {
        const {
            dispatch, getState,
        } = thunkAPI;
        const isLoading = getArticlesPageIsLoading(getState());
        const hasMore = getArticlesPageHasMore(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.increasePage());
            await dispatch(fetchArticlesList()); // поставил ожидание результат для тестирования thunk`а
        }
    },
);
