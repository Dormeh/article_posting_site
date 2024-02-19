import {
    ForwardedRef, forwardRef, memo, Suspense, useCallback, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { AddCommentForm } from 'features/AddCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import { Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getAddCommentForArticleError } from '../../model/selectors/addCommentForArticleSelectors';
import { addCommentForArticleReducer } from '../../model/slices/AddCommentForArticleSlice';
import { fetchArticleComments } from '../../model/services/fetchArticleComments/fetchArticleComments';
import { articleCommentsReducer, getArticleComments } from '../../model/slices/ArticleCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleCommentsStateSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleComments.module.scss';
import { ArticleDetailsPageSchema } from '../../model/types/ArticleDetailsPageSchema';
import { articleDetailsPageReducer } from '../../model/slices';

export interface ArticleCommentsProps {
    className?: string;
    id: string;
}

const ArticleComments = forwardRef((props: ArticleCommentsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getAddCommentForArticleError);
    const addCommentFormRef = useRef<HTMLFormElement>(null);

    useInitialEffect(() => {
        if (id) dispatch(fetchArticleComments(id));
    });

    const sendComment = useCallback(async (text) => {
        const result = await dispatch(addCommentForArticle(text));
        if (result.meta.requestStatus === 'fulfilled') {
            if (ref && addCommentFormRef && typeof ref !== 'function') {
                setTimeout(() => {
                    const cordDif = (addCommentFormRef.current?.getBoundingClientRect().bottom || 0)
                        - (ref.current?.clientHeight || 0);
                    if (cordDif > 0) {
                        ref.current?.scrollBy(
                            {
                                top: (cordDif),
                                behavior: 'smooth',
                            },
                        );
                    }
                }, 200);
            }
        }
    }, [dispatch, ref]);

    return (
        <>
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList isLoading={isLoading} comments={comments} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm
                    ref={addCommentFormRef}
                    formTitle={t('Ваш комментарий')}
                    onSubmit={sendComment}
                    className={cls.commentEdit}
                    formError={error}
                />
            </Suspense>
        </>

    );
});

export default memo(ArticleComments);
