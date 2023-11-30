import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginAuthData } from './getLoginAuthData';

describe('getLoginIsLoading.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                authData: {
                    username: 'test',
                    password: 'test',
                },
            },
        };
        expect(getLoginAuthData(state as StateSchema)).toEqual({ username: 'test', password: 'test' });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginAuthData(state as StateSchema)).toEqual({});
    });
});
