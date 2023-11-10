import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum ApplinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: ApplinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props:AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = ApplinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
