import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data: items = [], isLoading } = useNotifications();

    return (
        <VStack className={classNames('', {}, [className])} gap={10}>
            {isLoading
                ? [...Array(3)].map((_, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Skeleton key={index} borderRadius="8px" width="100%" height="80px" />
                  ))
                : items.map((item) => <NotificationItem key={item.id} item={item} />)}
        </VStack>
    );
});
