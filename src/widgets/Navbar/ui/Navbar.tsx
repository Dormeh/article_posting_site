import React, {
    memo, Suspense, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, getUserAuthData } from 'entities/User';
import { Loader } from 'shared/ui/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isUserAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    const logout = () => {
        dispatch(userActions.logout());
        navigate(RouterPath.main);
    };

    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
        >
            <Button
                className={cls.links}
                onClick={isUserAuth ? logout : openModal}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {isUserAuth ? t('Выйти') : t('Войти') }
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

        </div>
    );
});
