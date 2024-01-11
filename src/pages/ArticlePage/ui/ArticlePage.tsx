import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, RouterPath } from 'shared/config/routerConfig/routerConfig';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}
const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('ARTICLE PAGE')}
            <br />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <AppLink to={`${RouterPath.article_details}1`}>
                ARTICLE DETAILS
            </AppLink>
        </div>
    );
};

export default ArticlePage;
