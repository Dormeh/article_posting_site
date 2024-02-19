import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentForArticleIsLoading = (state: StateSchema) => state.articleDetailsPage?.addComment?.isLoading;
export const getAddCommentForArticleError = (state: StateSchema) => state.articleDetailsPage?.addComment?.error;
