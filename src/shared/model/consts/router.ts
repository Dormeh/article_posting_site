export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_CREATE = 'article_create',
    ADMIN_PAGE = 'admin_page',
    FORBIDDEN_PAGE = 'forbidden_page', // last
    NOT_FOUND = 'not_found',
}

export const RouterPath = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/article/',
    [AppRoutes.ARTICLE_EDIT]: '/article/edit/',
    [AppRoutes.ARTICLE_CREATE]: '/article/create',
    [AppRoutes.ADMIN_PAGE]: '/admin',
    [AppRoutes.FORBIDDEN_PAGE]: '/forbidden', // last
    [AppRoutes.NOT_FOUND]: '*',
} as const;
