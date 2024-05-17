import { MutableRefObject, useCallback } from 'react';

export const useScrollToView = (
    containerRef: MutableRefObject<HTMLElement | null>,
    elementRef: MutableRefObject<HTMLElement | null>,
) => {
    return useCallback(() => {
        if (containerRef.current && elementRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const elementRect = elementRef.current.getBoundingClientRect();

            if (elementRect.bottom > containerRect.bottom || elementRect.top < containerRect.top) {
                elementRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }
    }, [containerRef, elementRef]);
};
