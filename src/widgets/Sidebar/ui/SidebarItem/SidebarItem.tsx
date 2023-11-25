import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from 'widgets/Sidebar/models/item';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const {
        path, text, Icon,
    } = item;
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
        <AppLink
            className={cls.link}
            theme={ApplinkTheme.SECONDARY}
            to={path}
        >
            {/* <AboutIcon className={cls.icon} /> */}
            <Icon className={cls.icon} />
            <p className={classNames(cls['link-text'], { [cls.collapsed]: collapsed })}>
                {t(text)}
            </p>
        </AppLink>
    );
});
