import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import ArticleDetailPage from 'pages/ArticleDetailPage/ui/ArticleDetailPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',
    // last
    NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLE]: '/article',
    [AppRoutes.ARTICLE_DETAILS]: '/article_details',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RouterPath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: RouterPath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RouterPath.article_details,
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
};
