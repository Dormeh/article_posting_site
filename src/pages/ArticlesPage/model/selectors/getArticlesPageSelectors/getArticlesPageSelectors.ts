import { StateSchema } from 'app/providers/StoreProvider';

import { ContentView } from 'shared/model/types/types';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ContentView.PLATE;
