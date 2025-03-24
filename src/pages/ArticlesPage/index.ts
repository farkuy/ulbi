export { ArticlesPageAsync as ArticlesPage } from './ui/ArticlesPage.async';
export type { ArticlesPagesSchema } from './model/types/articlesPage';
export {
    getArticlesView, getArticlesSort, getArticlesOrder, getArticlesSearch,
} from './model/selectors/getArticles/getArticles';
export { articlesAction, articlesReducer } from './model/slice/articlesPageslice';
