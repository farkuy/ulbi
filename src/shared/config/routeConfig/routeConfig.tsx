import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage';
import { ArticleCreateEdit } from 'pages/ArticleCreateEdit';
import { AdminPage } from 'pages/AdminPage';
import { UserRole } from 'entities/User/model/types/user';
import { BlockedNavPage } from 'pages/BlockedNavPage';

export type CustomRouteProps = RouteProps & {
    forAuthPage?: boolean;
    forAdmin?: boolean
}

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

export const routeConfig: Record<AppRoutes, CustomRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        forAuthPage: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        forAuthPage: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticlesDetailsPage />,
        forAuthPage: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleCreateEdit />,
        forAuthPage: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleCreateEdit />,
        forAuthPage: true,
    },
    [AppRoutes.ADMIN]: {
        path: `${RoutePath.admin}`,
        element: <AdminPage />,
        forAuthPage: true,
        forAdmin: true,
    },
    [AppRoutes.BLOCK]: {
        path: `${RoutePath.block}`,
        element: <BlockedNavPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
