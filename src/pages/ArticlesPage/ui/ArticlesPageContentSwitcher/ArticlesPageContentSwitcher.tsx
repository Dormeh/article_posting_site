import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ContentSortForm } from 'features/ContentSortForm';
import { SelectContentPreview } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import { contentArticlesPageSelects } from 'pages/ArticlesPage/config/contentArticlesPageSelects';
import { ArticlesPageSortData } from 'pages/ArticlesPage/model/types/ArticlesPageSchema';
import { getArticleTabsSelectConfig } from 'entities/Article/lib/getArticleTabsSelectConfig';
import { getArticlesSelectsSortConfig } from 'pages/ArticlesPage/lib/getArticlesSortConfig';
import { FieldValues } from 'react-hook-form';
import { articlesSortApply } from 'pages/ArticlesPage/model/services/articlesSortApply/articlesSortApply';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { ContentView } from 'shared/model/types/types';
import cls from './ArticlesPageContentSwitcher.module.scss';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

interface ArticlesPageContentSwitcherProps {
    className?: string;
    sortData: ArticlesPageSortData;
    isLoading?: boolean;
}

export const ArticlesPageContentSwitcher = memo((props: ArticlesPageContentSwitcherProps) => {
    const {
        className,
        sortData,
        isLoading,
    } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const tabsConfig = useMemo(() => getArticleTabsSelectConfig(t), [t]);
    const sortSelectsConfig = useMemo(() => getArticlesSelectsSortConfig(t), [t]);
    const view = useSelector(getArticlesPageView);

    const onChangeSort = useCallback((data: FieldValues) => {
        dispatch(articlesSortApply(data as ArticlesPageSortData));
    }, [dispatch]);
    const onSelectView = useCallback((view: ContentView) => {
        dispatch(articlesPageActions.setPageContentView(view));
    }, [dispatch]);
    return (
        <div className={classNames(cls.ArticlesPageContentSwitcher, {}, [className])}>
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
        </div>
    );
});
