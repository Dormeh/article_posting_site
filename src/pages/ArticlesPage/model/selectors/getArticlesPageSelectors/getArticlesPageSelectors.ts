import { StateSchema } from 'app/providers/StoreProvider';
import { ContentView } from 'shared/model/consts/common';
import { articlesAdapter } from '../../../model/slice/articlesPageSlice/articlesAdapter';
import { ArticlesPageSortData } from '../../types/ArticlesPageSchema';

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ContentView.PLATE;

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 12;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || false;
export const getArticlesPageIsInit = (state: StateSchema) => state.articlesPage?._inited || false;

export const getArticlesPageSortData = (state: StateSchema) =>
    <ArticlesPageSortData>state?.articlesPage?.sortData || {};

export const getArticlesSelector = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const getArticlesCount = (state: StateSchema) => getArticlesSelector.selectAll(state).length;
