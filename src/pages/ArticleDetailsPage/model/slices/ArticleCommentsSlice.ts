import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema';
import { fetchArticleComments } from '../services/fetchArticleComments/fetchArticleComments';

export const articleCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id,
    // sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.articleComments || articleCommentsAdapter.getInitialState(),
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {
        addNewComment: (state, action) => {
            articleCommentsAdapter.addOne(state, action.payload);
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchArticleComments.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchArticleComments.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(fetchArticleComments.fulfilled, (state, { payload }) => {
            articleCommentsAdapter.setAll(state, payload);
            state.isLoading = false;
        }),
});
export const { reducer: articleCommentsReducer, actions: articleCommentsActions } = commentsSlice;
