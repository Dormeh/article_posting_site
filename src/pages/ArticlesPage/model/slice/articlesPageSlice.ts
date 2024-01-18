import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlePageData/fetchArticlesList';

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
    // sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const getArticlesSelector = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'ArticlePage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticlesView.PLATE,
    }),
    reducers: {
        errorReset: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ArticlePageActions } = articlesPageSlice;

export const { reducer: ArticlePageReducer } = articlesPageSlice;
