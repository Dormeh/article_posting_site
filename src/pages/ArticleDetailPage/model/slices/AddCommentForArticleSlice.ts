import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema, AddCommentForm } from 'features/AddCommentForm';
import {
    addCommentForArticle,
} from '../services/addCommentForArticle/addCommentForArticle';

const initialState: AddCommentFormSchema = {
    isLoading: false,
    error: undefined,
};
export const addCommentForArticleSlice = createSlice({
    name: 'addCommentForArticle',
    initialState,
    reducers: {
        errorReset: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCommentForArticle.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(addCommentForArticle.fulfilled, (state, action: PayloadAction<null>) => {
                state.isLoading = false;
            })
            .addCase(addCommentForArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: addCommentForArticleActions } = addCommentForArticleSlice;

export const { reducer: addCommentForArticleReducer } = addCommentForArticleSlice;
