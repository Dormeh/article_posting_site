import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { ContentView } from 'shared/model/types/types';
import { articlesMockData } from 'entities/Article/model/mockData/articlesMockData';
import cls from './ArticlesRecommendations.module.scss';

interface ArticlesRecommendationsProps {
    className?: string;
}

export const ArticlesRecommendations = memo((props: ArticlesRecommendationsProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <ArticlesList
            className={classNames(cls.ArticlesRecommendations, {}, [className])}
            articles={articlesMockData}
            view={ContentView.PLATE}
            target="_blank"
        />
    );
});
