import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { ContentView, SortOrder } from 'shared/model/types/types';

export interface ArticlesPageSortData extends OptionalRecord<string, string>{
    sort?: ArticleSortField;
    order?: SortOrder;
    type?: ArticleType;
    search?: string;
}

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ContentView;
    limit: number;
    page: number;
    hasMore: boolean;
    // сортировка
    sortData: ArticlesPageSortData;
    // инициализация страницы
    _inited: boolean;
}
