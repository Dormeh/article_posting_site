export interface LoginAuthData {
    username: string
    password: string
}

export interface LoginSchema {
    authData: LoginAuthData
    isLoading: boolean;
    error?: string;
}
