import { createSelector } from '@reduxjs/toolkit';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import { getUser } from '@/entities/User';
import { UserRole } from '@/entities/User/model/types/user';
import { TSidebarItem } from '../types/sidebar';
import { RoutePath } from '@/shared/consts';

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

        if (userData?.roles && (userData.roles.includes(UserRole.ADMIN) || userData.roles.includes(UserRole.MANAGER))) {
            sidebarLinks.push({
                path: RoutePath.admin,
                Icon: ProfileIcon,
                text: 'ADMIN',
            });
        }

        return sidebarLinks;
    },
);
