import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import Page from 'shared/ui/Page/Page';
import { useRef } from 'react';
import ArticleComments from '../ArticleComments/ArticleComments';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    let { id } = useParams();
    if (__PROJECT__ === 'storybook') id = '1';

    const wrapperPagRef = useRef<HTMLDivElement>(null);

    if (!id) return <Text theme={TextTheme.ERROR} title={t('Такой статьи нет')} />;

    return (
        <Page className={cls.ArticleDetailPage} ref={wrapperPagRef}>
            <ArticleDetails className={cls.pageContent} id={id} />
            <ArticleComments id={id} ref={wrapperPagRef} />
        </Page>

    );
};

export default ArticleDetailPage;
