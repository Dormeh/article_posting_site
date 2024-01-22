import { StateSchema } from 'app/providers/StoreProvider';

import { ContentView } from 'shared/model/types/types';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ContentView.PLATE;

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || false;
