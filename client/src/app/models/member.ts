export interface ProjectMember {
    userId: string;
    userName: string;
    title: string;
    isLeader: boolean;
}

export interface CreateMember {
    //projectId: string;
    userId: string;
    isLeader: boolean;
}

export interface UpdateMember {
    userId: string;
    projectId: string;
    isLeader: boolean;
}