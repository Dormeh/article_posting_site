import { SortOrder } from 'shared/model/types/types';
import { TFunction } from 'i18next';
import { SortSelectOption } from '../model/types/types';

export const getSortByOrderOptions = (t: TFunction): SortSelectOption[] => [
    {
        label: t('возрастанию'),
        value: SortOrder.ASC,
    },
    {
        label: t('убыванию'),
        value: SortOrder.DESC,
    },
];
