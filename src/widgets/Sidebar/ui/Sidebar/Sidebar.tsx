import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import Arrow from 'shared/assets/icons/arrow.svg';
import { useSelector } from 'react-redux';
import { useViewportSizeState } from 'shared/lib/hooks/useViewportSizeState/useViewportSizeState';
import { HStack, VStack } from 'shared/ui/Stack';
import { getSidebarItemsList } from '../../models/selectors/getSidebarItemsList';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const WINDOW_WIDTH_TO_COLLAPSE = 950;

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const overSizeToCollapse = useViewportSizeState(WINDOW_WIDTH_TO_COLLAPSE, () =>
        setCollapsed(true),
    );

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItemsList = useSelector(getSidebarItemsList);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <VStack tagName="nav" className={cls['link-box']} max={false} align="start" gap={10}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </VStack>
            {!overSizeToCollapse && (
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
            <HStack className={cls.switchers} justify="evenly">
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </HStack>
        </aside>
    );
});
