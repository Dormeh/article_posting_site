import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleRecommendationsSchema } from 'pages/ArticleDetailsPage/model/types/ArticleRecommendationsSchema';
import { Article } from 'entities/Article/model/types/article';

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
    reducers: {
        // addNewComment: (state, action) => {
        //     articlesRecommendationsAdapter.addOne(state, action.payload);
        // },
    },
    // extraReducers: (builder) => builder
    //     .addCase(fetchArticleComments.pending, (state) => {
    //         state.isLoading = true;
    //     })
    //     .addCase(fetchArticleComments.rejected, (state, { payload }) => {
    //         state.isLoading = false;
    //         state.error = payload;
    //     })
    //     .addCase(fetchArticleComments.fulfilled, (state, { payload }) => {
    //         articlesRecommendationsAdapter.setAll(state, payload);
    //         state.isLoading = false;
    //     }),
});
export const {
    reducer: articleRecommendationsReducer,
    actions: articleRecommendationsActions,
} = articleRecommendationsSlice;
