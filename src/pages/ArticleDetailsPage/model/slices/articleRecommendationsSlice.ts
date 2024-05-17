import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
import { ArticleRecommendationsSchema } from '../types/ArticleRecommendationsSchema';
import {
    fetchRecommendations,
} from '../services/fetchRecommendations/fetchRecommendations';

export const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
    // sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const getRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.articleRecommendations || recommendationsAdapter.getInitialState(),
);

const articleRecommendationsSlice = createSlice({
    name: 'recommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchRecommendations.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchRecommendations.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(fetchRecommendations.fulfilled, (state, { payload }) => {
            recommendationsAdapter.setAll(state, payload);
            state.isLoading = false;
        }),
});
export const {
    reducer: articleRecommendationsReducer,
    actions: articleRecommendationsActions,
} = articleRecommendationsSlice;
