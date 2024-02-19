import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesRecommendations.module.scss';

interface ArticlesRecommendationsProps {
    className?: string;
}

export const ArticlesRecommendations = memo((props: ArticlesRecommendationsProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesRecommendations, {}, [className])}>
            ArticlesRecommendations
        </div>
    );
});
