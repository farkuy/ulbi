import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import {
    Button, ButtonSize, ButtonTheme, VStack,
} from '@/shared/ui';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarLinks = useSelector(getSidebarItems);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const itemList = useMemo(() => sidebarLinks.map((item) => (
        <SidebarItem
            key={item.path}
            collapsed={collapsed}
            item={item}
        />
    )), [collapsed, sidebarLinks]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <VStack gap="16" className={classNames(cls.links)}>
                {itemList}
            </VStack>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                className={classNames(cls.openButton, {}, [])}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </aside>
    );
});
