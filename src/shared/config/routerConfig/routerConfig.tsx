import { RouteProps } from 'react-router-dom';
import { MainePage } from 'pages/MainePage';
import { AboutPage } from 'pages/AboutPage';

enum AppRouter {
    MAINE = 'maine',
    ABOUT = 'about'
}

const AppRouterPath: Record<AppRouter, string> = {
    [AppRouter.MAINE]: '/',
    [AppRouter.ABOUT]: '/about',
};

export const routerConfig: RouteProps [] = [
    { path: AppRouterPath.maine, children: <MainePage /> },
    { path: AppRouterPath.about, children: <AboutPage /> },
];
