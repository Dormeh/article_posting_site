import { ArticleCommentsSchema } from './ArticleCommentsSchema';
import { ArticleRecommendationsSchema } from './ArticleRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    articleComments: ArticleCommentsSchema;
    articleRecommendations: ArticleRecommendationsSchema;
}
