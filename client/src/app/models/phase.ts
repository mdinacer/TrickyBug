export interface ProjectPhase {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    projectId: string;
}

export interface CreatePhase {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}

export interface UpdatePhase {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}