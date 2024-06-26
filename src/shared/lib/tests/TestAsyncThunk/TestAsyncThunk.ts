import { CombinedState } from 'redux';
import axios, { AxiosStatic } from 'axios';
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider';
import { AnyAction, AsyncThunkAction, ThunkAction } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersList } from '../../components/DynamicModuleLoader/DynamicModuleLoader';
import SpyInstance = jest.SpyInstance;

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    store: ReturnType<typeof createReduxStore>;

    dispatch: SpyInstance<
        unknown,
        [
            action:
                | AnyAction
                | ThunkAction<unknown, CombinedState<StateSchema>, ThunkExtraArg, AnyAction>,
        ]
    >;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList,
    ) {
        this.api = mockedAxios;
        this.store = createReduxStore(state as StateSchema, asyncReducers, this.api);
        this.actionCreator = actionCreator;
        this.dispatch = jest.spyOn(this.store, 'dispatch');

        this.getState = jest.fn(() => state as StateSchema);
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.store?.dispatch, this.store.getState, { api: this.api });

        return result;
    }
}
