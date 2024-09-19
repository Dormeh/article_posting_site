import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/model/consts/common';
import { getSortByOrderOptions } from '../lib/getSortByOrderOptions';
import { Select, SelectProps } from '../../Select/ui/Select';
import type { IOption } from '../../Select/model/types/types';

export interface SortSelectProps extends Omit<SelectProps, 'options'> {
    sortOptions?: IOption[];
}

export const SortSelect = memo((props: SortSelectProps) => {
    const { t } = useTranslation();
    const defaultSortOptions = useMemo(() => getSortByOrderOptions(t), [t]);

    const {
        name = 'order',
        className,
        defaultValue = SortOrder.ASC,
        sortOptions = defaultSortOptions,
        placeholder = t('Выберите вид сортировки'),
        label,
        ...otherProps
    } = props;

    return (
        <Select
            name={name}
            className={classNames('', {}, [className])}
            options={sortOptions}
            label={label || t('Сортировать по')}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...otherProps}
        />
    );
});
