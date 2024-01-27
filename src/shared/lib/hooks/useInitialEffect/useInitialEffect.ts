import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void, deps?: ReadonlyArray<unknown>) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, [deps]);
};
