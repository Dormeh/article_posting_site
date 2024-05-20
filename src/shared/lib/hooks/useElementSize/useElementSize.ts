import { MutableRefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';

export function useRefWithSizeSate<T extends HTMLElement>(
    size: number,
    onOverSizeCallback?: (...args: any[]) => void,
): [MutableRefObject<T | null>, boolean] {
    const [overSize, setOverSize] = useState<boolean>(false);
    const ref = useRef<T>(null);

    const onResize = useCallback(() => {
        if (ref.current) {
            const { width } = ref.current.getBoundingClientRect();
            if (width < size) {
                onOverSizeCallback?.();
                setOverSize(true);
            } else {
                setOverSize(false);
            }
        }
    }, [onOverSizeCallback, size]);
    useLayoutEffect(() => {
        window.addEventListener('resize', onResize);
        onResize();
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [onOverSizeCallback, onResize, size]);

    return [ref, overSize];
}
