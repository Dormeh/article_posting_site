import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SelectContentPreview } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import { memo, useCallback } from 'react';
import { ContentView } from 'shared/model/types/types';
import Page from 'shared/ui/Page/Page';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
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

    useInitialEffect(() => {
        dispatch(initArticlesPage());
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
