import { memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import Page from 'shared/ui/Page/ui/Page';
import { getArticleAllContentIsLoading } from '../../model/selectors/getArticleAllContentIsLoading';
import cls from './ArticleDetailPage.module.scss';
import ArticleComments from '../ArticleComments/ArticleComments';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    let { id } = useParams();
    if (__PROJECT__ === 'storybook') id = '1';
    const isLoading = useSelector(getArticleAllContentIsLoading);

    const wrapperPagRef = useRef<HTMLDivElement>(null);

    if (!id) return <Text theme={TextTheme.ERROR} title={t('Такой статьи нет')} />;

    return (
        <Page className={cls.ArticleDetailPage} ref={wrapperPagRef} scrollPositionTake={!isLoading}>
            <ArticleDetails className={cls.pageContent} id={id} />
            <ArticleComments id={id} ref={wrapperPagRef} />
        </Page>

    );
};

export default memo(ArticleDetailPage);
