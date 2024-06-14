import React from 'react';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main_page_20-20.svg';
import AboutIcon from 'shared/assets/icons/about_20-20_4.svg';
import ProfileIcon from 'shared/assets/icons/profile_20-20_2.svg';
import ArticleIcon from 'shared/assets/icons/article_20-20_2.svg';
import { User } from 'entities/User';
import { SidebarItemType } from './types';

export const sidebarItemsList: SidebarItemType[] = [
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
        path: '',
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
        pathModify(authData: User) {
            this.path = `${RouterPath.profile}${authData.id}`;
        },
    },
    {
        path: RouterPath.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
