import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSortData } from '../../types/ArticlesPageSchema';

export const articlesSortApply = createAsyncThunk<void, ArticlesPageSortData, ThunkConfig<string>>(
    'ArticlePage/initArticlesPage',
    async (data, thunkAPI) => {
        const { dispatch } = thunkAPI;
        dispatch(articlesPageActions.setPageSortParams(data));
        await dispatch(fetchArticlesList({ refreshList: true })); // Ждем результата для тестирования
    },
);
