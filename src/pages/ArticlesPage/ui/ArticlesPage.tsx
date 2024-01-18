import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList, ArticlesView } from 'entities/Article';
import { articlesMockData } from '../../../entities/Article/model/mockData/articlesMockData';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticlesList
                view={ArticlesView.LIST}
                articles={articlesMockData}
            />
        </div>
    );
};

export default ArticlesPage;
