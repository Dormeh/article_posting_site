import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ContentView } from 'shared/model/types/types';
import { VStack, HStack } from 'shared/ui/Stack';
import cls from './ArticlesListItem.module.scss';

interface ArticlesListItemSkeletonProps {
    className?: string;
    view: ContentView;
}

export const ArticlesListItemSkeleton = (props: ArticlesListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ContentView.LIST) {
        return (
            <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <VStack gap={7} className={cls.header}>
                        <HStack gap={10} align="center">
                            <Skeleton height={30} width={30} borderRadius="50%" />
                            <Skeleton height={16} width={100} />
                            <Skeleton width={100} height={16} className={cls.date} />
                        </HStack>
                        <Skeleton className={cls.title} height={25} />
                        <Skeleton className={cls.type} height={16} />
                    </VStack>
                    <VStack gap={16} className={cls.main}>
                        <Skeleton className={cls.imgPreview} height={170} />
                        <Skeleton height={200} />
                    </VStack>
                    <HStack justify="between">
                        <Skeleton height={30} width={110} />
                        <Skeleton width={80} height={16} />
                    </HStack>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
            <Card className={classNames(cls.card, {}, [cls.skeletonCard])}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.imgPreview} height={200} />
                </div>
                <HStack>
                    <Skeleton className={cls.type} height={16} />
                </HStack>
                <Skeleton height={20} />
            </Card>
        </div>
    );
};
