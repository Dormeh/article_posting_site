import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <div className={cls.Page}>
            <main className={className}>
                {children}
            </main>
            <footer style={{ textAlign: 'center' }}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* FOOTER */}
            </footer>
        </div>
    );
};
