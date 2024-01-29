import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttle = useRef<boolean>(false);

    return useCallback((...args) => {
        if (!throttle.current) {
            callback(...args);
            throttle.current = true;
            setTimeout(() => {
                throttle.current = false;
            }, delay);
        }
    }, [callback, delay]);
}
