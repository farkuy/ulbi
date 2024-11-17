import { RouteProps } from 'react-router-dom';
import { MainePage } from 'pages/MainePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';

enum AppRouter {
    MAINE = 'maine',
    ABOUT = 'about',
    NOT_FOUND = '*',
}

const AppRouterPath: Record<AppRouter, string> = {
    [AppRouter.MAINE]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.NOT_FOUND]: '/*',
};

export const routerConfig: RouteProps [] = [
    { path: AppRouterPath.maine, children: <MainePage /> },
    { path: AppRouterPath.about, children: <AboutPage /> },
    { path: AppRouterPath['*'], children: <NotFound /> },
];
