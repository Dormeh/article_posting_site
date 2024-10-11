import React, { memo, Suspense, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from 'features/AuthByUsername';
import { getUserAuthData } from 'entities/User';
import { Loader } from 'shared/ui/Loader/ui/Loader/Loader';
import CreateArticleIcon from 'shared/assets/icons/add_new_item_icon.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HStack } from 'shared/ui/Stack';
import { RouterPath } from 'shared/model/consts/router';
import { NavbarNotificationsButton } from '../NavbarNotificationsButton/NavbarNotificationsButton';
import { NavbarAvatarDropdown } from '../NavbarAvatarDropdown/NavbarAvatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

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
                    <NavbarNotificationsButton />
                    <NavbarAvatarDropdown authData={authData} />
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
