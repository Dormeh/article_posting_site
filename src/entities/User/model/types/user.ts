export enum UserRoles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
}

export interface User {
    id: string;
    username: string;
    profileId: string;
    avatar?: string;
    roles?: UserRoles[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
