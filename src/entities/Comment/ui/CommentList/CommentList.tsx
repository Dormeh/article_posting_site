import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comments';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation('article');

    if (isLoading && !comments.length) {
        return (
            <>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </>
        );
    }

    return (
        <VStack gap={16} className={classNames('', {}, [className])}>
            {comments.length ? (
                comments.map((comment) => (
                    <CommentCard isLoading={isLoading} comment={comment} key={comment.id} />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
});
