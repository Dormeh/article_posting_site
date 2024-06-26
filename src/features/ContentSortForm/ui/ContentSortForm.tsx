import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { Tabs } from 'shared/ui/Tabs/ui/Tabs';
import { SortSelect, SortSelectProps } from 'shared/ui/SortSelect/ui/SortSelect';
import { TabsConfig } from 'shared/ui/Tabs/model/types/tabsType';
import { Input } from 'shared/ui/Input/Input';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ChangeHandler } from 'react-hook-form/dist/types/form';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ContentSortForm.module.scss';

interface ContentSortFormProps {
    className?: string;
    tabsConfig?: TabsConfig;
    sortSelectsConfig?: SortSelectProps[];
    sortData: FieldValues; // TODO сделать тип из контекста TabsConfig и sortSelectsConfig
    onChangeSort: (data: FieldValues) => void;
    isLoading?: boolean;
}

export const ContentSortForm = memo((props: ContentSortFormProps) => {
    const { className, sortSelectsConfig, tabsConfig, onChangeSort, sortData, isLoading } = props;
    const { t } = useTranslation();

    const {
        control,
        handleSubmit,
        formState: { isDirty, dirtyFields },
        watch,
        setFocus,
    } = useForm<typeof sortData>({
        values: sortData,
        mode: 'onChange',
    });

    useEffect(() => {
        const subscription = watch((data, { name, type }) => {
            if (name && sortData[name] !== data[name]) {
                handleSubmit(onChangeSort)();
            }
        });
        // setFocus('search'); // убрал так как позиция скрола не срабатывает при фокусе
        return () => subscription.unsubscribe();
    }, [dirtyFields, handleSubmit, isDirty, onChangeSort, setFocus, sortData, watch]);

    const debounceOnInputChange = useDebounce(
        (callback: ChangeHandler, e: React.ChangeEvent<HTMLInputElement>) => {
            callback(e).then();
        },
        1000,
    );

    return (
        <VStack
            gap={7}
            tagName="form"
            className={classNames(cls.ContentSortForm, { [cls.loading]: isLoading }, [className])}
        >
            {sortSelectsConfig && (
                <HStack justify="between" gap={16} className={cls.selectsWrapper}>
                    {sortSelectsConfig.map(({ placeholder, sortOptions, label, name }) => (
                        <SortSelect
                            style={{
                                width: `${Math.floor(100 / sortSelectsConfig.length)}%`,
                            }}
                            name={name}
                            className={cls.sortSelect}
                            placeholder={placeholder}
                            sortOptions={sortOptions}
                            control={control}
                            label={label}
                            key={name}
                            readonly={isLoading}
                            labelTextClass={cls.labelText}
                        />
                    ))}
                </HStack>
            )}
            <Input
                className={cls.searchInput}
                name="search"
                label={t('Поиск')}
                type="text"
                register={control.register}
                onChange={debounceOnInputChange}
                readonly={isLoading}
                maxLength={100}
            />
            {tabsConfig && (
                <Tabs tabsConfig={tabsConfig} register={control.register} readOnly={isLoading} />
            )}
        </VStack>
    );
});
