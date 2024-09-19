import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye_20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar_20-20.svg';
import { ArticleDetailsPageHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { HStack, VStack } from 'shared/ui/Stack';
import { renderBlocks } from '../../lib/renderBlocks';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
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
                <Skeleton className={`${cls.skeleton} ${cls.block}`} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                className={cls.error}
                title={t('Произошла ошибка при загрузке статьи.')}
                theme={TextTheme.ERROR}
                size={TextSize.L}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <ArticleDetailsPageHeader />
                <Avatar src={article?.img} size={200} className={cls.avatar} alt={article?.title} />
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    className={cls.title}
                    align={TextAlign.LEFT}
                />
                <HStack align="center" className={cls.articleInfo}>
                    <EyeIcon className={cls.icon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack align="center" className={cls.articleInfo}>
                    <CalendarIcon className={cls.icon} />
                    <Text text={article?.createdAt} />
                </HStack>
                {article?.blocks.map((block) => renderBlocks(block, cls.block))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack justify="evenly" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
};
