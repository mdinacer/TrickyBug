export interface AppUser {
    displayName: string;
    token: string;
    username: string;
    image: string;
    roles: string[]
    title: string
    isActive: boolean
}


export interface AppUserFull {
    id: string;
    displayName: string;
    username: string;
    image: string;
    title: string
    isActive: boolean
}

export interface RegisterUser {
    displayName: string;
    username: string;
    title: string;
    email: string;
    password: string;
}

export interface LoginUser {
    email: string;
    password: string;
}