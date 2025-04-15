export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN = 'admin',
    BLOCK = 'block'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // +id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/article/', // +id
    [AppRoutes.ARTICLE_CREATE]: '/article/create',
    [AppRoutes.ARTICLE_EDIT]: '/article/:id/edit', // +id
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.BLOCK]: '/block',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
