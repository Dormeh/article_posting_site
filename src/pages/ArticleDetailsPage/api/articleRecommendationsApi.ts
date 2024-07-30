import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article/model/types/article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number | void>({
            query: (limit = 6) => ({
                url: '/recommendations',
                params: {
                    _expand: 'profile',
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetArticleRecommendationsListQuery } = articleRecommendationsApi;
