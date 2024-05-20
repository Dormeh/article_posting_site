import { TFunction } from 'i18next';
import { SortSelectProps } from 'shared/ui/SortSelect/ui/SortSelect';
import { getArticlesSelectSortConfig } from 'entities/Article/lib/getArticlesSelectSortConfig';
import { ArticleSortSelectProps } from 'entities/Article/model/types/article';

export const getArticlesSelectsSortConfig = (
    t: TFunction,
): [ArticleSortSelectProps, SortSelectProps] => [
    {
        sortOptions: getArticlesSelectSortConfig(t),
        name: 'sort',
        placeholder: t('Выберите сортировкy для статей'),
    },
    {
        name: 'order',
        placeholder: t(''),
    },
];
