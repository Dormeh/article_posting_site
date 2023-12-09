import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams();

    // eslint-disable-next-line i18next/no-literal-string
    if (!id) return <>Такой страницы нет</>;

    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailPage;
