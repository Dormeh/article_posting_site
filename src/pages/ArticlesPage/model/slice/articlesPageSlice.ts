import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ContentView, SortOrder } from 'shared/model/types/types';
import { LOCAL_STORAGE_ARTICLES_PAGE_VIEW_KEY } from 'shared/config/const/localstorage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema, ArticlesPageSortData } from '../types/ArticlesPageSchema';

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
        limit: 12,
        page: 1,
        hasMore: true,
        sortData: {
            sort: ArticleSortField.CREATED,
            order: SortOrder.ASC,
            type: ArticleType.ALL,
            search: '',
        },
        _inited: false,
    }),
    reducers: {
        errorReset: (state) => {
            state.error = undefined;
        },
        changeLimitByView: (state, { payload }: PayloadAction<ContentView>) => {
            state.limit = payload === ContentView.PLATE ? 12 : 4;
        },
        initPageState: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW_KEY) as ContentView;
            articlesPageSlice.caseReducers.changeLimitByView(
                state,
                articlesPageSlice.actions.changeLimitByView(view),
            );
            state.view = view;
            state._inited = true;
        },
        setPageContentView: (state, { payload }: PayloadAction<ContentView>) => {
            state.view = payload;
            articlesPageSlice.caseReducers.changeLimitByView(
                state,
                articlesPageSlice.actions.changeLimitByView(payload),
            );
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW_KEY, payload);
        },
        setPageSortParams: (state, { payload }: PayloadAction<ArticlesPageSortData>) => {
            state.sortData = payload;
        },
        increasePage: (state) => {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length === state.limit;
                if (action.meta.arg.refreshList) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;

export const { reducer: articlesPageReducer } = articlesPageSlice;
