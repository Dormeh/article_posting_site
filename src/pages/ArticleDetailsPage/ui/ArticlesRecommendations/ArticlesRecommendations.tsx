import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { ContentView } from 'shared/model/types/types';
import { articlesMockData } from 'entities/Article/model/mockData/articlesMockData';
import { getRecommendations } from 'pages/ArticleDetailsPage/model/slices/articleRecommendationsSlice';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchRecommendations/fetchRecommendations';
import cls from './ArticlesRecommendations.module.scss';

interface ArticlesRecommendationsProps {
    className?: string;
}

export const ArticlesRecommendations = memo((props: ArticlesRecommendationsProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const recommendations = useSelector(getRecommendations.selectAll);

    useInitialEffect(() => {
        dispatch(fetchRecommendations());
    });
    return (
        <ArticlesList
            className={classNames(cls.ArticlesRecommendations, {}, [className])}
            articles={recommendations}
            view={ContentView.PLATE}
            target="_blank"
        />
    );
});
