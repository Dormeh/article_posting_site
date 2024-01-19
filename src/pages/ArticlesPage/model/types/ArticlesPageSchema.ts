import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/model/types/article';
import { ContentView } from 'shared/model/types/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ContentView;
}
