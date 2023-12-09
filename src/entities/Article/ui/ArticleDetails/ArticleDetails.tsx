import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchArticleData } from 'entities/Article/model/services/fetchArticleData/fetchArticleData';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getAtricleDetails/getAtricleDetails';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleReducer,
};
export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleData(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} borderRadius="50%" width={200} height={200} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (!error) {
        content = (
            <Text
                className={cls.error}
                title={t('Произошла ошибка при загрузке статьи.')}
                theme={TextTheme.ERROR}
                size={TextSize.L}
                align={TextAlign.CENTER}
            />
        );
    } else content = JSON.stringify(data);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
