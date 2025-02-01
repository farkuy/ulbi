import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getUser } from 'entities/User';
import { TSidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUser,
    (userData) => {
        const sidebarLinks: TSidebarItem[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData?.id) {
            sidebarLinks.push(
                ...[{
                    path: `${RoutePath.profile}${userData.id}`,
                    Icon: ProfileIcon,
                    text: 'PROFILE',
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'ARTICLES',
                }],
            );
        }

        return sidebarLinks;
    },
);
