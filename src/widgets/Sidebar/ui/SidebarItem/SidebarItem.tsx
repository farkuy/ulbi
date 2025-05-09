import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import { getUser } from '@/entities/User';
import { TSidebarItem } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { routeConfig } from '@/app/providers/router';
import { AppRoutes } from '@/shared/consts/router';

interface SidebarItemProps {
    item: TSidebarItem;
    collapsed?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed = false } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUser);

    if (!isAuth && routeConfig[item.path as AppRoutes]?.forAuthPage) return null;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.link_wrapper, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={classNames(cls.svg)} />
            <span className={classNames(cls.linkText)}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
