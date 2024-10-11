import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, DropdownItem } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { RouterPath } from 'shared/model/consts/router';
import { isUserAdmin, isUserManager, User, userActions } from 'entities/User';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';

interface NavbarAvatarDropdownProps {
    className?: string;
    authData: User | undefined;
}

export const NavbarAvatarDropdown = memo((props: NavbarAvatarDropdownProps) => {
    const { className, authData } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelCanAccess = isAdmin || isManager;
    const logout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const menuItems: DropdownItem[] = useMemo(
        () => [
            ...(isAdminPanelCanAccess ? [{ content: t('Админ панель'), href: '/admin' }] : []),
            {
                content: t('Профиль'),
                href: `${RouterPath.profile}${authData?.profileId || ''}`,
            },
            {
                content: t('Выйти'),
                onClick: logout,
            },
        ],
        [isAdminPanelCanAccess, t, authData, logout],
    );

    return (
        <Dropdown
            dropdownItems={menuItems}
            dropdownTrigger={<Avatar size={40} src={authData?.avatar} />}
            direction="bottom-right"
            className={className}
        />
    );
});
