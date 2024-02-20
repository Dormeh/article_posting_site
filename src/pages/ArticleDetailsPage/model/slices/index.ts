import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types/ArticleDetailsPageSchema';
import { addCommentForArticleReducer } from './AddCommentForArticleSlice';
import { articleCommentsReducer } from './ArticleCommentsSlice';
import { articleRecommendationsReducer } from './articleRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    articleComments: articleCommentsReducer,
    articleRecommendations: articleRecommendationsReducer,
});
