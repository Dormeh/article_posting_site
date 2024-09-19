import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/model/types/article';
import { ContentView, SortOrder } from 'shared/model/consts/common';

import { ArticleSortField, ArticleType } from 'entities/Article/model/consts/consts';

export interface ArticlesPageSortData extends Record<string, string> {
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
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
