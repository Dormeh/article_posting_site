import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsIsLoading } from 'entities/Article';
import { getArticleCommentsIsLoading } from './articleCommentsStateSelectors';
import {
    getArticleRecommendationsIsLoading,
} from '../selectors/articleRecommendationsSelectors';

export const getArticleAllContentIsLoading = createSelector(
    getArticleCommentsIsLoading,
    getArticleDetailsIsLoading,
    getArticleRecommendationsIsLoading,
    (
        isLoadingComments,
        isLoadingDetails,
        isLoadingRecommendations,
    ) => isLoadingComments || isLoadingDetails || isLoadingRecommendations,
);
