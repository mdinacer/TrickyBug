export interface ProjectMember {
    userId: string;
    userName: string;
    isLeader: boolean;
    title: string;
    role: string;
}

export interface CreateMember {
    //projectId: string;
    userId: string;
    isLeader: boolean;
    title: string;
    role: string;
}

export interface UpdateMember {
    userId: string;
    projectId: string;
    isLeader: boolean;
    title: string;
    role: string;
}