import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollProps {
    wrapRef: MutableRefObject<HTMLElement | null>;
    triggerRef: MutableRefObject<HTMLElement | null>;
    onScrollCallback?: () => void;
}

export function useInfinityScroll(props: UseInfinityScrollProps, deps: ReadonlyArray<any>) {
    const { triggerRef, wrapRef, onScrollCallback } = props;
    useEffect(() => {
        const wrapRefElem = wrapRef.current;
        const triggerRefElem = triggerRef.current;
        let observer: IntersectionObserver;

        if (onScrollCallback && triggerRefElem && wrapRefElem) {
            const options = {
                root: wrapRefElem,
                rootMargin: '0px',
                threshold: 0.9,
            };

            const callback = ([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting) {
                    if (__IS_DEV__) console.log('scroll to end callback');
                    onScrollCallback();
                }
            };

            observer = new IntersectionObserver(callback, options) as IntersectionObserver;

            observer.observe(triggerRefElem);
        }

        return () => {
            if (observer && triggerRefElem) {
                observer.unobserve(triggerRefElem);
            }
        };
    }, [deps, onScrollCallback, triggerRef, wrapRef]);
}
