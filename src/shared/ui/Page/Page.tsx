import {
    ForwardedRef, forwardRef, memo, ReactNode, useRef,
} from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollCallback?: () => void;
}

const Page = forwardRef(
    (props: PageProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            className,
            children,
            onScrollCallback,
        } = props;

        const triggerRef = useRef<HTMLDivElement>(null);
        const wrapperPagRef = useRef<HTMLDivElement>(null);
        const wrapRef = ref || wrapperPagRef;

        useInfinityScroll({
            triggerRef,
            wrapRef,
            onScrollCallback,
        });

        return (
            <div className={classNames(cls.Page, {}, ['page-wrapper'])} ref={wrapRef}>
                <main className={classNames(cls.main, {}, [className])}>
                    {children}
                </main>
                <footer ref={triggerRef} style={{ textAlign: 'center' }}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    FOOTER
                </footer>
            </div>
        );
    },
);

export default memo(Page);
