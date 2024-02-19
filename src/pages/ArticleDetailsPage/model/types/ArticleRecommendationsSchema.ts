import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/model/types/article';

export interface ArticleRecommendationsSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
