import { SortOrder } from 'shared/model/types/types';
import { TFunction } from 'i18next';
import { SortSelectOption } from 'shared/ui/SortSelect/model/types/types';

export const getSortByOrderOptions = (t: TFunction): SortSelectOption[] => [
    {
        label: 'возрастанию',
        value: SortOrder.ASC,
    },
    {
        label: 'убыванию',
        value: SortOrder.DESC,
    },
];
