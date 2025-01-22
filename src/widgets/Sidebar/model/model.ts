import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';

export interface TSidebarItem {
    path: AppRoutes,
    Icon: React.SFC<React.SVGProps<SVGSVGElement>>,
    text: string,
}

export const SidebarLinks: TSidebarItem[] = [
    {
        path: AppRoutes.MAIN,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: AppRoutes.ABOUT,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: AppRoutes.PROFILE,
        Icon: ProfileIcon,
        text: 'PROFILE',
    },
    {
        path: AppRoutes.ARTICLES,
        Icon: ArticlesIcon,
        text: 'ARTICLES',
    },
];
