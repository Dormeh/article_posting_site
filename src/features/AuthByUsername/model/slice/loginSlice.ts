import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    authData: undefined,
    isLoading: false,
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.authData = action.payload;
        },
        errorReset: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
