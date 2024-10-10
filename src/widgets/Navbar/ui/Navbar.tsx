import React, { memo, Suspense, useCallback, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Loader } from 'shared/ui/Loader/ui/Loader/Loader';
import CreateArticleIcon from 'shared/assets/icons/add_new_item_icon.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HStack } from 'shared/ui/Stack';
import { Dropdown, DropdownItem } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { RouterPath } from 'shared/model/consts/router';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelCanAccess = isAdmin || isManager;

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
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
                onClick: authData ? logout : openModal,
            },
        ],
        [isAdminPanelCanAccess, t, authData, logout, openModal],
    );

    return (
        <HStack
            tagName="header"
            justify="end"
            align="center"
            gap={16}
            className={classNames(cls.Navbar, {}, [className])}
        >
            {authData ? (
                <>
                    <AppLink
                        to={RouterPath.article_create}
                        className={`${cls.btn} ${cls.link}`}
                        activeView={false}
                    >
                        <CreateArticleIcon className={cls.createIcon} />
                    </AppLink>
                    <Dropdown
                        dropdownItems={menuItems}
                        dropdownTrigger={<Avatar size={40} src={authData?.avatar} />}
                        direction="bottom-right"
                    />
                </>
            ) : (
                <>
                    <Button className={cls.btn} onClick={openModal} theme={ButtonTheme.CLEAR}>
                        {t('Войти')}
                    </Button>
                    <Modal isOpen={isModalOpen} onClose={closeModal} lazy>
                        <Suspense fallback={<Loader />}>
                            <AuthForm focus={isModalOpen} formClose={closeModal} />
                        </Suspense>
                    </Modal>
                </>
            )}
        </HStack>
    );
});
