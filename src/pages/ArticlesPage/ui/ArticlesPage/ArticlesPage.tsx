import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from 'shared/ui/Page/ui/Page';
import {
    getArticlesPageError,
    getArticlesPageIsInit,
    getArticlesPageIsLoading,
    getArticlesPageSortData,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { fetchNextPartData } from '../../model/services/fetchNextPartData/fetchNextPartData';
import { articlesPageReducer, getArticlesSelector } from '../../model/slice/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    ArticlesPageContentSwitcher,
} from '../ArticlesPageContentSwitcher/ArticlesPageContentSwitcher';
import cls from './ArticlesPage.module.scss';

const initialsReducers = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticlesSelector.selectAll);
    const sortData = useSelector(getArticlesPageSortData);
    const isInit = useSelector(getArticlesPageIsInit);

    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        setSearchParams(sortData);
    }, [sortData, setSearchParams]);
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextContent = useCallback(() => {
        dispatch(fetchNextPartData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialsReducers}>
            <Page className={cls.page} onScrollCallback={onLoadNextContent} scrollPositionTake>
                <ArticlesPageContentSwitcher sortData={sortData} isLoading={isLoading} />
                <ArticlesList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                    error={error}
                    pageIsInit={isInit}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);