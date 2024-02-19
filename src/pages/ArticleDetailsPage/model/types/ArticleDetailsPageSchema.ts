import { ArticleCommentsSchema, ArticleRecommendationsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';

export interface ArticleDetailsPageSchema {
    articleComments: ArticleCommentsSchema;
    articleRecommendations: ArticleRecommendationsSchema;
    addComment: AddCommentFormSchema;
}
