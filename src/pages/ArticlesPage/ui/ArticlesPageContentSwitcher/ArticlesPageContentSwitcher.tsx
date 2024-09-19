import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ContentSortForm } from 'features/ContentSortForm';
import { SelectContentPreview } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import { getArticleTabsSelectConfig } from 'entities/Article/lib/getArticleTabsSelectConfig';
import { FieldValues } from 'react-hook-form';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { ContentView } from 'shared/model/consts/common';
import { ArticlesPageSortData } from '../../model/types/ArticlesPageSchema';
import { contentArticlesPageSelects } from '../../config/contentArticlesPageSelects';
import { getArticlesSelectsSortConfig } from '../../lib/getArticlesSortConfig';
import { articlesSortApply } from '../../model/services/articlesSortApply/articlesSortApply';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import cls from './ArticlesPageContentSwitcher.module.scss';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

interface ArticlesPageContentSwitcherProps {
    className?: string;
    sortData: ArticlesPageSortData;
    isLoading?: boolean;
}

export const ArticlesPageContentSwitcher = memo((props: ArticlesPageContentSwitcherProps) => {
    const { className, sortData, isLoading } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const tabsConfig = useMemo(() => getArticleTabsSelectConfig(t), [t]);
    const sortSelectsConfig = useMemo(() => getArticlesSelectsSortConfig(t), [t]);
    const view = useSelector(getArticlesPageView);

    const onChangeSort = useCallback(
        (data: FieldValues) => {
            dispatch(articlesSortApply(data as ArticlesPageSortData));
        },
        [dispatch],
    );
    const onSelectView = useCallback(
        (view: ContentView) => {
            dispatch(articlesPageActions.setPageContentView(view));
        },
        [dispatch],
    );
    return (
        <VStack className={classNames(cls.ArticlesPageContentSwitcher, {}, [className])}>
            <ContentSortForm
                sortData={sortData}
                tabsConfig={tabsConfig}
                sortSelectsConfig={sortSelectsConfig}
                onChangeSort={onChangeSort}
                isLoading={isLoading}
            />
            <SelectContentPreview
                className={cls.viewSelect}
                selects={contentArticlesPageSelects}
                view={view}
                onSelect={onSelectView}
            />
        </VStack>
    );
});
