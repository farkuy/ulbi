export { ArticleView } from './model/types/article';
export type { Article, ArticleSchema } from './model/types/article';
export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetails, getArticleDetailsError, getArticleDetailsLoading }
    from './model/selectors/getArticle/getArticle';
export { ArticleDetails } from './ui/ArticleDiteis/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
