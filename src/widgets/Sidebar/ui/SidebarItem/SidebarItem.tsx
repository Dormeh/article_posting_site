import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../models/types';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const { path, text, Icon } = item;

    return (
        <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={path.toString()}>
            {/* <AboutIcon className={cls.icon} /> */}
            <Icon className={cls.icon} />
            <p className={classNames(cls['link-text'], { [cls.collapsed]: collapsed })}>
                {t(text)}
            </p>
        </AppLink>
    );
});
