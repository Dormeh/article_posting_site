import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, ApplinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={ApplinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={ApplinkTheme.RED} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
