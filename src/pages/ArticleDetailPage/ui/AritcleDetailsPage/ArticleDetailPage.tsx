import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    let { id } = useParams();
    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) return <Text theme={TextTheme.ERROR} title={t('Такой статьи нет')} />;

    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails className={cls.pageContent} id={id} />
            <ArticleComments id={id} />
        </div>

    );
};

export default ArticleDetailPage;
