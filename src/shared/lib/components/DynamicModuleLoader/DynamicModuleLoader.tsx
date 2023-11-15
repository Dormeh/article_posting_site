import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        reducers,
        removeAfterUnmount,
        children,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            const isReducerAdded = store.reducerManager.add(name as StateSchemaKey, reducer);
            if (isReducerAdded) dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DELETE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};
