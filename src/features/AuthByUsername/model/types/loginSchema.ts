import { FieldValues } from 'react-hook-form';

export interface LoginAuthData extends FieldValues {
    username: string;
    password: string;
}

export interface LoginSchema {
    authData: LoginAuthData | undefined;
    isLoading: boolean;
    error?: string;
}
