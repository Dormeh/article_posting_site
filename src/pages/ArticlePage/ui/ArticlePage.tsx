import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import { articlesMockData } from '../../../entities/Article/model/mockData/articlesMockData';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}
const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            <ArticleList
                view={ArticleView.PLATE}
                articles={articlesMockData}
            />
        </div>
    );
};

export default ArticlePage;
