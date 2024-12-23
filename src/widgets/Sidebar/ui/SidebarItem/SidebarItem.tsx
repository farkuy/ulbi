import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { TSidebarItem } from '../../model/model';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: TSidebarItem;
    collapsed?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed = false } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath[item.path]}
            className={classNames(cls.link_wrapper, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={classNames(cls.svg)} />
            <span className={classNames(cls.linkText)}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
