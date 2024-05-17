import { SortOrder } from 'shared/model/types/types';
import { IOption } from '../../../Select/model/types/types';

export interface SortSelectOption extends IOption {
    value: SortOrder;
}
