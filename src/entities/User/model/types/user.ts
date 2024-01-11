export interface User {
    id: string;
    username: string;
    profileId: string;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
