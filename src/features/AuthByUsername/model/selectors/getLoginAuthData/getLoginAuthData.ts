import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginAuthData = (state: StateSchema) => state?.loginForm?.authData || {};
