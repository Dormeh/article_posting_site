import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onToggle = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
        >
            <Button
                className={cls.links}
                onClick={openModal}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isModalOpen} onClose={onToggle} lazy>
                <AuthForm
                    focus={isModalOpen}
                    formClose={closeModal}
                />
            </Modal>

        </div>
    );
};
