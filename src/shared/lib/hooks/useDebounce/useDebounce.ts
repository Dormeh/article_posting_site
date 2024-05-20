import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number, ...args: any[]) {
    const throttleRef = useRef<ReturnType<typeof setTimeout>>();

    return useCallback(
        (...args: any[]) => {
            if (throttleRef.current) {
                clearTimeout(throttleRef.current);
            }
            throttleRef.current = setTimeout(() => callback(...args), delay);
        },
        [callback, delay],
    );
}
