import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/ArticleDetailsPageSchema';
import { articleCommentsReducer } from './ArticleCommentsSlice';
import { articleRecommendationsReducer } from './articleRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    articleComments: articleCommentsReducer,
    articleRecommendations: articleRecommendationsReducer,
});
