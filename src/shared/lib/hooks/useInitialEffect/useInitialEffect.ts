import { useEffect } from 'react';

export function useInitialEffect(callback: () => void, deps?: ReadonlyArray<unknown>) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, [deps]);
}
