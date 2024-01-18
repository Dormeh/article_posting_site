import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesListItem } from 'entities/Article/ui/ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from 'entities/Article/ui/ArticlesListItem/ArticlesListItemSkeleton';
import cls from './ArticlesList.module.scss';
import { Article, ArticlesView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticlesView;
}

const getSkeleton = (view: ArticlesView) => [...Array(view === ArticlesView.LIST ? 3 : 9)]
    .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticlesListItemSkeleton view={view} key={index} />
    ));

export const ArticlesList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticlesView.PLATE,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
                {getSkeleton(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            article={article}
            view={view}
            key={article.id}
        />
    );
    return (
        <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
