import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comments';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        isLoading,
        comment,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.isLoading])}>
                <div className={cls.header}>
                    <Skeleton borderRadius="50%" width={30} height={30} />
                    <Skeleton width="100px" height={18} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }

    const { profile: { username, avatar, id }, text } = comment;

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RouterPath.profile}${id}`} className={cls.header}>
                <Avatar
                    className={cls.avatar}
                    size={30}
                    src={avatar}
                />
                <Text title={username} className={cls.userName} />
            </AppLink>
            <Text text={text} className={cls.text} />
        </div>
    );
});
