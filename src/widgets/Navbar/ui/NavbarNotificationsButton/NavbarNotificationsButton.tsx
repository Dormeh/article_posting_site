import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import cls from './NavbarNotificationsButton.module.scss';

interface NavbarNotificationsButtonProps {
    className?: string;
}

export const NavbarNotificationsButton = memo((props: NavbarNotificationsButtonProps) => {
    const { className } = props;

    const trigger = <NotificationIcon className={cls.icon} />;
    return (
        <Popover
            className={classNames(cls.NavbarNotificationsButton, {}, [className])}
            trigger={trigger}
            direction="bottom-right"
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
