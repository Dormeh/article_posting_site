import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set authData', () => {
        const state : DeepPartial<LoginSchema> = { authData: { username: '123', password: '123' } };
        expect(loginReducer(state as LoginSchema, loginActions.setAuthData({ username: '123', password: '123' }))).toEqual({ authData: { username: '123', password: '123' } });
    });
    test('test errorReset', () => {
        const state : DeepPartial<LoginSchema> = { error: 'error' };
        expect(loginReducer(state as LoginSchema, loginActions.errorReset())).toEqual({ error: undefined });
    });
});
