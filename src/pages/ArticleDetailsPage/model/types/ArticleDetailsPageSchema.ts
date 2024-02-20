import { ArticleCommentsSchema, ArticleRecommendationsSchema } from 'pages/ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    articleComments: ArticleCommentsSchema;
    articleRecommendations: ArticleRecommendationsSchema;
}
