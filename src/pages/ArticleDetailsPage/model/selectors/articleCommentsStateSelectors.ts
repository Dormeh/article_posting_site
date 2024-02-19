import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.articleComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.articleComments?.error;
