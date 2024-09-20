import { memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import Page from 'shared/ui/Page/ui/Page';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailsPageMainContent } from '../ArticleDetailsPageMainContent/ArticleDetailsPageMainContent';
import { ArticlesRecommendations } from '../ArticlesRecommendations/ArticlesRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleAllContentIsLoading } from '../../model/selectors/getArticleAllContentIsLoading';
import cls from './ArticleDetailsPage.module.scss';
import ArticleComments from '../ArticleComments/ArticleComments';

const initialReducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = () => {
    const { t } = useTranslation('article');
    let { id } = useParams();
    if (__PROJECT__ === 'storybook') id = '1';
    const isLoading = useSelector(getArticleAllContentIsLoading);

    const wrapperPagRef = useRef<HTMLDivElement>(null);

    if (!id) return <Text theme={TextTheme.ERROR} title={t('Такой статьи нет')} />;

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page
                className={cls.ArticleDetailsPage}
                ref={wrapperPagRef}
                scrollPositionTake={!isLoading}
            >
                <ArticleDetailsPageMainContent id={id} />
                <ArticlesRecommendations className={cls.recommendations} />
                <ArticleComments id={id} ref={wrapperPagRef} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
