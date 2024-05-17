import { TFunction } from 'i18next';
import { ArticleSortField, ArticleSortOption } from '../model/types/article';

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
