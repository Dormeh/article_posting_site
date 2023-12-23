import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleComments } from 'pages/ArticleDetailPage/model/services/fetchArticleComments';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import {
    getArticleCommentsIsLoading,
} from 'pages/ArticleDetailPage/model/selectors/articleCommentsStateSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleCommentsReducer, getArticleComments } from '../model/slices/ArticleCommentsSlice';
import cls from './ArticleDetailPage.module.scss';

const initialReducers = {
    articleComments: ArticleCommentsReducer,
};
interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    let { id } = useParams();
    if (__PROJECT__ === 'storybook') id = '1';

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) dispatch(fetchArticleComments(id));
    });

    if (!id) return <Text theme={TextTheme.ERROR} title={t('Такой страницы нет')} />;

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetails className={cls.pageContent} id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>

    );
};

export default ArticleDetailPage;
