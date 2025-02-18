import { ArticleDetailsCommentSchema } from './model/types/articleDetailsComment';
import { ArticleDetailsRecommendationSchema } from './model/types/articleDetailsRecommendationSchema';

export { ArticlesDetailsPageAsync as ArticlesDetailsPage } from './ui/ArticlesDetailsPage.async';

export interface ArticlesDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendation: ArticleDetailsRecommendationSchema;
}
