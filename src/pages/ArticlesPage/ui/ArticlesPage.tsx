import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading, getArticlesPagePage,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SelectContentPreview } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import { memo, useCallback, useRef } from 'react';
import { ContentView } from 'shared/model/types/types';
import Page from 'shared/ui/Page/Page';
import { fetchNextPartData } from 'pages/ArticlesPage/model/services/fetchNextPartData/fetchNextPartData';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { contentArticlesPageSelects } from '../config/contentArticlesPageSelects';
import cls from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticlesSelector } from '../model/slice/articlesPageSlice';

interface ArticlesPageProps {
    className?: string;
}

const initialsReducers = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticlesSelector.selectAll);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initPageContentView());
        dispatch(fetchArticlesList());
    });

    const onLoadNextContent = useCallback(() => {
        dispatch(fetchNextPartData());
    }, [dispatch]);

    const onSelectView = useCallback((view: ContentView) => {
        dispatch(articlesPageActions.setPageContentView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialsReducers}>
            <Page className={className} onScrollCallback={onLoadNextContent}>
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
