import React, {
    memo, Suspense, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Loader } from 'shared/ui/Loader/ui/Loader/Loader';
import CreateArticleIcon from 'shared/assets/icons/add_new_item_icon.svg';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isUserAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    const logout = () => {
        dispatch(userActions.logout());
    };

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
        >
            { isUserAuth && (
                <AppLink
                    to={RouterPath.article_create}
                    className={`${cls.btn} ${cls.link}`}
                    activeView={false}
                >
                    <CreateArticleIcon className={cls.createIcon} />
                </AppLink>
            )}
            <Button
                className={cls.btn}
                onClick={isUserAuth ? logout : openModal}
                theme={ButtonTheme.CLEAR}
            >
                {isUserAuth ? t('Выйти') : t('Войти')}
            </Button>
            {!isUserAuth && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    lazy
                >
                    <Suspense fallback={<Loader />}>
                        <AuthForm
                            focus={isModalOpen}
                            formClose={closeModal}
                        />
                    </Suspense>

                </Modal>
            )}

        </header>
    );
});
