import { useCallback, useEffect, useState } from 'react';

export const useCollapseSidebarState = (WINDOW_WIDTH_TO_COLLAPSE: number) => {
    const [canBeCollapsed, setCanBeCollapsed] = useState(true);

    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        if (width < WINDOW_WIDTH_TO_COLLAPSE) {
            setCanBeCollapsed(false);
        } else if (width >= WINDOW_WIDTH_TO_COLLAPSE) {
            setCanBeCollapsed(true);
        }
    }, [WINDOW_WIDTH_TO_COLLAPSE]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return canBeCollapsed;
};
