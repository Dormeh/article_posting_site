import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlePageData/fetchArticlesList';
import { SelectContentPreview } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import { contentArticlesPageSelects } from 'pages/ArticlesPage/config/contentArticlesPageSelects';
import { useCallback } from 'react';
import { ContentView } from 'shared/model/types/types';
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
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesSelector.selectAll);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initPageContentView());
    });

    const onSelectView = useCallback((view: ContentView) => {
        dispatch(articlesPageActions.setPageContentView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialsReducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <SelectContentPreview selects={contentArticlesPageSelects} view={view} onSelect={onSelectView} />
                <ArticlesList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default ArticlesPage;
