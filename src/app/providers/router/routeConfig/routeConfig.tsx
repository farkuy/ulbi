import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticlesDetailsPage } from '@/pages/ArticlesDetailsPage';
import { ArticleCreateEdit } from '@/pages/ArticleCreateEdit';
import { AdminPage } from '@/pages/AdminPage';
import { BlockedNavPage } from '@/pages/BlockedNavPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/shared/consts';
import { CustomRouteProps } from '@/shared/types/router';

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
