import { UserRole } from 'shared/model/types/types';

export interface User {
    id: string;
    username: string;
    profileId: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
