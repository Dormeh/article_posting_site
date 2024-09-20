import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPageMainContent.module.scss';

interface ArticleDetailsPageMainContentProps {
    id: string;
    className?: string;
}
export const ArticleDetailsPageMainContent = memo(
    ({ className, id }: ArticleDetailsPageMainContentProps) => {
        return (
            <div className={classNames(cls.ArticleDetailsPageMainContent, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
            </div>
        );
    },
);
