import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
    Button, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Arrow from 'shared/assets/icons/arrow.svg';
import RotateArrow from 'shared/assets/icons/rotateArrow.svg';
import MainIcon from 'shared/assets/icons/main_page_20-20.svg';
import AboutIcon from 'shared/assets/icons/about_20-20.svg';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <div className={cls['link-box']}>
                <AppLink
                    className={cls.link}
                    theme={ApplinkTheme.SECONDARY}
                    to={RouterPath.main}
                >
                    <MainIcon className={cls.icon} />
                    <p className={cls['link-text']}>
                        {t('Главная')}
                    </p>
                </AppLink>
                <AppLink
                    className={cls.link}
                    theme={ApplinkTheme.SECONDARY}
                    to={RouterPath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <p className={cls['link-text']}>
                        {t('О сайте')}
                    </p>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
            >
                {collapsed ? <RotateArrow /> : <Arrow />}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
