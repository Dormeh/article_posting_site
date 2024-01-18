import { EntityState } from '@reduxjs/toolkit';
import { ArticlesView } from 'entities/Article';
import { Article } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticlesView;
}
