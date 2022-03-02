export interface AppUser {
    displayName: string;
    token: string;
    username: string;
    image: string;
    roles: string[]
}

export interface AppUserFull {
    id: string;
    displayName: string;
    username: string;
    image: string;
}

export interface RegisterUser {
    displayName: string;
    username: string;
    email: string;
    password: string;
}

export interface LoginUser {
    email: string;
    password: string;
}