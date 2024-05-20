import { useCallback, useEffect, useState } from 'react';

export function useViewportSizeState(
    WINDOW_WIDTH_TO_COLLAPSE: number,
    onOverSizeCallback?: (...ars: any[]) => void,
): boolean {
    const [overSize, setOverSize] = useState(false);

    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        if (width < WINDOW_WIDTH_TO_COLLAPSE) {
            setOverSize(true);
            onOverSizeCallback?.();
        } else if (width >= WINDOW_WIDTH_TO_COLLAPSE) {
            setOverSize(false);
        }
    }, [WINDOW_WIDTH_TO_COLLAPSE, onOverSizeCallback]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return overSize;
}
