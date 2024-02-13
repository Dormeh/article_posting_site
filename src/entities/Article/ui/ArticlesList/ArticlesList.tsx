import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesListItem } from 'entities/Article/ui/ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from 'entities/Article/ui/ArticlesListItem/ArticlesListItemSkeleton';
import { ContentView } from 'shared/model/types/types';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticlesList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view: ContentView;
    error?: string;
    pageIsInit: boolean;
}

const getSkeleton = (view: ContentView) => [...Array(view === ContentView.LIST ? 3 : 9)]
    .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticlesListItemSkeleton view={view} key={index} />
    ));

export const ArticlesList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view,
        error,
        pageIsInit,
    } = props;
    const { t } = useTranslation();

    if (error) {
        return (
            <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
                <Text
                    className={cls.error}
                    title={t(error)}
                    theme={TextTheme.ERROR}
                />
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
                : !isLoading && pageIsInit && (
                    <Text
                        className={cls.emptyContentText}
                        title={t('Статьи не найдены')}
                        align={TextAlign.CENTER}
                    />
                )}
            {isLoading && getSkeleton(view)}
        </div>
    );
});
