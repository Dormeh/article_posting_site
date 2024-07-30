import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesList } from 'entities/Article';
import { ContentView } from 'shared/model/types/types';
import cls from './ArticlesRecommendations.module.scss';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface ArticlesRecommendationsProps {
    className?: string;
}

export const ArticlesRecommendations = memo((props: ArticlesRecommendationsProps) => {
    const { className } = props;
    /**
     * альтернативный вариант получения данных из состояния использую RTK Query
     */
    const { data: recommendations = [] } = useGetArticleRecommendationsListQuery();

    return (
        <ArticlesList
            className={classNames(cls.ArticlesRecommendations, {}, [className])}
            articles={recommendations}
            view={ContentView.PLATE}
            target="_blank"
        />
    );
});
