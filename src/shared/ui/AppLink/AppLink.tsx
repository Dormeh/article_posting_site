import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ForwardedRef, forwardRef, memo, ReactNode } from 'react';
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

const AppLinkBase = (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
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
            ref={ref}
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
};

export const AppLink = memo(forwardRef(AppLinkBase));
