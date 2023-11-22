import type { Props } from 'react-select/base';
import { CreateMutable } from 'shared/config/types/common';
import { GroupBase } from 'react-select';

export interface IOption {
    value: string;
    label: string;
}

export type isMulti = false;

export type Group = GroupBase<IOption>

export type CustomSelectProps = CreateMutable<Props<IOption, isMulti, Group>>
