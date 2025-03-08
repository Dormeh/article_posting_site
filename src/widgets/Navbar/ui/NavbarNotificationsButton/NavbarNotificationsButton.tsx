import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Desktop } from 'shared/ui/Device/Desktop';
import { Mobile } from 'shared/ui/Device/Mobile';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Button } from 'shared/ui/Button/Button';
import cls from './NavbarNotificationsButton.module.scss';

interface NavbarNotificationsButtonProps {
    className?: string;
}

export const NavbarNotificationsButton = memo((props: NavbarNotificationsButtonProps) => {
    const { className } = props;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const onCloseDrawer = () => setIsDrawerOpen(false);
    const onOpenDrawer = () => setIsDrawerOpen(true);

    const trigger = <NotificationIcon className={cls.icon} />;
    return (
        <>
            <Desktop>
                <Popover
                    className={classNames(cls.NavbarNotificationsButton, {}, [className])}
                    trigger={trigger}
                    direction="bottom-right"
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </Desktop>
            <Mobile>
                <Button onClick={onOpenDrawer} className={cls.btn}>
                    {trigger}
                </Button>
                <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                    <NotificationList className={cls.notifications} />
                </Drawer>
            </Mobile>
        </>
    );
});
