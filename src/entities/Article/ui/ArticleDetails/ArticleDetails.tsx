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
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye_20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar_20-20.svg';
import { renderBlocks } from 'entities/Article/model/renderBlocks';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/getArticleDetails/getArticleDetails';
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
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

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
                <div className={cls.avatarWrapper}>
                    <Avatar src={article?.img} size={200} className={cls.avatar} alt={article?.title} />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    className={cls.title}
                    align={TextAlign.LEFT}
                />
                <div className={cls.articleInfo}>
                    <EyeIcon className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <CalendarIcon className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map((block) => renderBlocks(block, cls.block))}
            </>

        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
