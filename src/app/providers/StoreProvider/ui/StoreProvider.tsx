import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from 'redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    if (__IS_DEV__) console.log('render Store');
    // const navigate = useNavigate(); // закоментировал так как ссылка на функцию обновляется и происходит ререндер стора(нужно использовать доп контекст)
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate,
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
