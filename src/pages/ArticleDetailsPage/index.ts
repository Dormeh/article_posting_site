export { ArticleDetailsPageSchema } from './model/types/ArticleDetailsPageSchema';

export { articleDetailsPageReducer } from './model/slices';

export { articleRecommendationsReducer } from './model/slices/articleRecommendationsSlice';

export { ArticleRecommendationsSchema } from './model/types/ArticleRecommendationsSchema';

export {
    ArticleDetailsPageAsync as ArticleDetailPage,
} from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.async';
export { ArticleCommentsSchema } from './model/types/ArticleCommentsSchema';
export { addCommentForArticleReducer } from './model/slices/AddCommentForArticleSlice';
export { articleCommentsReducer } from './model/slices/ArticleCommentsSlice';
