import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ContentView } from 'shared/model/consts/common';
import { getRecommendations } from '../../model/slices/articleRecommendationsSlice';
import { fetchRecommendations } from '../../model/services/fetchRecommendations/fetchRecommendations';
import cls from './ArticlesRecommendations.module.scss';

interface ArticlesRecommendationsProps {
    className?: string;
}

export const ArticlesRecommendations = memo((props: ArticlesRecommendationsProps) => {
    const { className } = props;
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
