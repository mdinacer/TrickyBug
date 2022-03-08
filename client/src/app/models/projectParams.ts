export interface ProjectParams {
    pageNumber: number,
    pageSize: number,
    orderBy: string;
    searchTerm?: string | null;
    isMember: boolean
}