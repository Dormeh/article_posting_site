import { SortOrder } from 'shared/model/consts/common';
import { IOption } from '../../../Select/model/types/types';

export interface SortSelectOption extends IOption {
    value: SortOrder;
}
