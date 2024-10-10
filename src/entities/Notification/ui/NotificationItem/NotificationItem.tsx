import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card className={classNames('', {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );
    if (item.href) {
        return (
            <Link to={item.href} target="_blank" rel="noreferrer">
                {content}
            </Link>
        );
    }
    return content;
});
