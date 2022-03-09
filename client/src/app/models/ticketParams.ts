export interface TicketParams {
    status: string | null;
    priority: number | null;
    startDate: string | null;
    endDate: string | null;
    orderBy: string;
    searchTerm: string | null;
    pageNumber: number,
    pageSize: number,
    projectId?: string | null
}

export class TicketParamsInitial implements TicketParams {
    status = null;
    priority = null;
    startDate = null;
    endDate = null;
    orderBy = "date";
    searchTerm = null;
    pageNumber = 1;
    pageSize = 10;

}