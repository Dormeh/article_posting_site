import { ForwardedRef, MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollProps {
    wrapRef: ForwardedRef<HTMLDivElement>;
    triggerRef: MutableRefObject<HTMLElement | null>;
    onScrollCallback?: () => void;
}

export const useInfinityScroll = (props: UseInfinityScrollProps) => {
    const {
        triggerRef,
        wrapRef,
        onScrollCallback,
    } = props;
    useEffect(() => {
        const wrapRefElem = typeof wrapRef !== 'function' ? wrapRef?.current : null;
        const triggerRefElem = triggerRef?.current;
        let observer: IntersectionObserver;

        if (onScrollCallback && triggerRefElem && wrapRefElem) {
            const options = {
                root: wrapRefElem,
                rootMargin: '0px',
                threshold: 0.9,
            };

            const callback = ([entry]:IntersectionObserverEntry[]) => {
                if (entry.isIntersecting) {
                    console.log('scroll to end callback');

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
    }, [onScrollCallback, triggerRef, wrapRef]);
};
