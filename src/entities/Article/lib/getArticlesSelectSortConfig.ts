import { ArticleSortField, ArticleSortOption } from 'entities/Article/model/types/article';
import { TFunction } from 'i18next';

export const getArticlesSelectSortConfig = (t: TFunction): ArticleSortOption[] => [
    {
        value: ArticleSortField.CREATED,
        label: t('дате создания'),
    },
    {
        value: ArticleSortField.TITLE,
        label: t('названию'),
    },
    {
        value: ArticleSortField.VIEWS,
        label: t('просмотрам'),
    },
];
