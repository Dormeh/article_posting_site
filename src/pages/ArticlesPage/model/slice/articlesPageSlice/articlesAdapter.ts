import { createEntityAdapter } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/model/types/article';

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id, // sortComparer: (a, b) => a.id.localeCompare(b.id),
});
