import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import Arrow from 'shared/assets/icons/arrow.svg';
import { useSelector } from 'react-redux';
import { getSidebarItemsList } from '../../models/selectors/getSidebarItemsList';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        if (!collapsed && width < 950) {
            setCollapsed(true);
        } else if (collapsed && width >= 950) {
            setCollapsed(false);
        }
    }, [collapsed]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

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
            <div className={cls['link-box']}>
                {sidebarItemsList.map((
                    item,
                ) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
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
