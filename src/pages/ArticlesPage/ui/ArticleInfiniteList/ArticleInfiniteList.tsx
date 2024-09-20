import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesList } from 'entities/Article';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsInit,
    getArticlesPageView,
    getArticlesSelector,
} from '../../model/selectors/getArticlesPageSelectors/getArticlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
    isLoading?: boolean;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className, isLoading } = props;
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticlesSelector.selectAll);
    const isInit = useSelector(getArticlesPageIsInit);

    return (
        <ArticlesList
            className={classNames('', {}, [className])}
            view={view}
            articles={articles}
            error={error}
            isLoading={!isInit || isLoading}
        />
    );
});
