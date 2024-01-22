import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import Arrow from 'shared/assets/icons/arrow.svg';
import { useSelector } from 'react-redux';
import { useCollapseSidebarState } from '../../lib/hooks/useCollapseSidebarState';
import { getSidebarItemsList } from '../../models/selectors/getSidebarItemsList';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const WINDOW_WIDTH_TO_COLLAPSE = 950;

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const canBeCollapsed = useCollapseSidebarState(WINDOW_WIDTH_TO_COLLAPSE);

    useEffect(() => {
        if (!canBeCollapsed) setCollapsed(true);
    }, [canBeCollapsed]);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItemsList = useSelector(getSidebarItemsList);

    return (
        <aside
            data-testid="sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <nav className={cls['link-box']}>
                {sidebarItemsList.map((
                    item,
                ) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </nav>
            {canBeCollapsed && (
                <Button
                    data-testid="sidebar-toggle"
                    type="button"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    size={ButtonSize.L}
                >
                    <Arrow className={cls.arrow} />
                </Button>
            )}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </aside>
    );
});
