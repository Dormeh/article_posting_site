import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageSelectors = (state: StateSchema) => state.articlesPage?.view;
