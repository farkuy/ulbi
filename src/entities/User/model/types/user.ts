export enum UserRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER'
}

export interface User {
    id: string;
    username: string;
    roles: UserRole[];
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    _inited?: boolean;
}
