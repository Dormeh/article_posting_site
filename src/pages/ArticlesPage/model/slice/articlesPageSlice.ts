import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ContentView } from 'shared/model/types/types';
import { LOCAL_STORAGE_ARTICLES_PAGE_VIEW_KEY, LOCAL_STORAGE_USER_KEY } from 'shared/config/const/localstorage';
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
        view: ContentView.PLATE,
    }),
    reducers: {
        errorReset: (state) => {
            state.error = undefined;
        },
        initPageContentView: (state) => {
            state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW_KEY) as ContentView;
        },
        setPageContentView: (state, { payload }: PayloadAction<ContentView>) => {
            state.view = payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW_KEY, payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;

export const { reducer: articlesPageReducer } = articlesPageSlice;
