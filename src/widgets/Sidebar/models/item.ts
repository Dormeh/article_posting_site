import React from 'react';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main_page_20-20.svg';
import AboutIcon from 'shared/assets/icons/about_20-20_4.svg';
import ProfileIcon from 'shared/assets/icons/profile_20-20_2.svg';
import ArticleIcon from 'shared/assets/icons/article_20-20_2.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RouterPath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RouterPath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RouterPath.article,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
