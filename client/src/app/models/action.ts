export interface ProjectAction {
    id: number;
    title: string;
    description: string;
    actionDate: string;
    projectId: string;
    authorId: string;
    isAuthor: boolean;
    author: string;
}

export interface CreateAction {
    title: string;
    description: string;
}

export interface UpdateAction {
    id: number;
    title: string;
    description: string;
}