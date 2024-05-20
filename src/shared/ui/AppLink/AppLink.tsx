import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends NavLinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
    activeView?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        activeView = true,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [cls.active]: activeView && isActive }, [
                    className,
                    cls[theme],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
