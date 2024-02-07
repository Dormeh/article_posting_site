import { IOption } from 'shared/ui/Select/model/types/types';
import { SortOrder } from 'shared/model/types/types';

export interface SortSelectOption extends IOption {
    value: SortOrder;
}
