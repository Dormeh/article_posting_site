import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentForArticleIsLoading = (state: StateSchema) =>
    state.addCommentForArticle?.isLoading;
export const getAddCommentForArticleError = (state: StateSchema) =>
    state.addCommentForArticle?.error;
