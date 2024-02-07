import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SelectContentPreview } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import { ContentView } from 'shared/model/types/types';
import Page from 'shared/ui/Page/ui/Page';
import { ContentSortForm } from 'features/ContentSortForm';
import { useTranslation } from 'react-i18next';
import { getArticleTabsSelectConfig } from 'entities/Article/lib/getArticleTabsSelectConfig';
import { ArticlesPageSortData } from '../model/types/ArticlesPageSchema';
import { getArticlesSelectsSortConfig } from '../lib/getArticlesSortConfig';
import {
    getArticlesPageError,
    getArticlesPageIsLoading, getArticlesPageSortData,
    getArticlesPageView,
} from '../model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { fetchNextPartData } from '../model/services/fetchNextPartData/fetchNextPartData';
import { contentArticlesPageSelects } from '../config/contentArticlesPageSelects';
import cls from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticlesSelector } from '../model/slice/articlesPageSlice';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
    className?: string;
}

const initialsReducers = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticlesSelector.selectAll);
    const sortData = useSelector(getArticlesPageSortData);

    const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextContent = useCallback(() => {
        dispatch(fetchNextPartData());
    }, [dispatch]);

    const onSelectView = useCallback((view: ContentView) => {
        dispatch(articlesPageActions.setPageContentView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((data: ArticlesPageSortData) => {
        dispatch(articlesPageActions.setPageSortParams(data));
    }, [dispatch]);

    const tabsConfig = useMemo(() => getArticleTabsSelectConfig(t), [t]);
    const sortSelectsConfig = useMemo(() => getArticlesSelectsSortConfig(t), [t]);

    return (
        <DynamicModuleLoader reducers={initialsReducers}>
            <Page className={className} onScrollCallback={onLoadNextContent} scrollPositionTake>
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
                <ArticlesList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                    error={error}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
