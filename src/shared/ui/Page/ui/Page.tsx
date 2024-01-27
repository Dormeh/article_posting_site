import {
    ForwardedRef, forwardRef, memo, ReactNode, useEffect, useLayoutEffect, useRef,
} from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPageScrollPosition } from 'shared/ui/Page/model/selectors/getPageScroll';
import { StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { pageActions } from 'shared/ui/Page/model/slice/pageSlice';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollCallback?: () => void;
    scrollPositionTake?: boolean;
}

const Page = forwardRef(
    (props: PageProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            className,
            children,
            onScrollCallback,
            scrollPositionTake = false,
        } = props;

        ref = typeof ref !== 'function' ? ref : null;
        // ForwardedRef возвращает Юнион тип, а нужен тип MutableRefObject<HTMLDivElement | null>

        const wrapperPagRef = useRef<HTMLDivElement>(null);
        const wrapRef = (ref || wrapperPagRef);
        const triggerRef = useRef<HTMLDivElement>(null);
        const { pathname } = useLocation();
        const dispatch = useAppDispatch();
        const pageScrollPosition = useSelector(
            (state: StateSchema) => getPageScrollPosition(state, pathname),
        );

        useEffect(() => {
            if (wrapRef.current && scrollPositionTake) {
                wrapRef.current.scrollTop = pageScrollPosition;
            }
        }, [pageScrollPosition, scrollPositionTake, wrapRef]);

        useLayoutEffect(() => () => {
            dispatch(pageActions.setPageScrollPosition({
                path: pathname,
                position: wrapRef.current?.scrollTop || 0,
            }));
        }, [dispatch, pathname, wrapRef]);

        useInfinityScroll({
            triggerRef,
            wrapRef,
            onScrollCallback,
        }, []);

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
