import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectProps } from 'shared/ui/Select/ui/Select';
import { IOption } from 'shared/ui/Select/model/types/types';
import { SortOrder } from 'shared/model/types/types';
import { getSortByOrderOptions } from 'shared/ui/SortSelect/lib/getSortByOrderOptions';

export interface SortSelectProps extends Omit<SelectProps, 'options'>{
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
        control,
        label,
        readonly,
    } = props;

    return (
        <Select
            name={name}
            className={classNames('', {}, [className])}
            options={sortOptions}
            label={label || t('Сортировать по')}
            placeholder={placeholder}
            control={control}
            defaultValue={defaultValue}
            readonly={readonly}
        />
    );
});
