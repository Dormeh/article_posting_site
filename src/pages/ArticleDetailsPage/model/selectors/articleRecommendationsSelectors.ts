import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.articleRecommendations?.isLoading;
};
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.articleRecommendations?.error;
};
