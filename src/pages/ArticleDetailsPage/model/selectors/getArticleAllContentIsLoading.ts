import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsIsLoading } from 'entities/Article';
import { getArticleCommentsIsLoading } from './articleCommentsStateSelectors';

export const getArticleAllContentIsLoading = createSelector(
    getArticleCommentsIsLoading,
    getArticleDetailsIsLoading,
    (isLoadingComments, isLoadingDetails) => isLoadingComments || isLoadingDetails,
);
