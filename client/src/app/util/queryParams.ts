import { PaginationParams } from "../models/pagingParams";
import { ProjectPhaseTicketParams, TicketParams } from "../models/ticketParams";

export function getTicketsParams(ticketParams: TicketParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", ticketParams.pageNumber.toString());
    params.append("pageSize", ticketParams.pageSize.toString());
    params.append("orderBy", ticketParams.orderBy);

    if (ticketParams.searchTerm) {
        params.append("searchTerm", ticketParams.searchTerm);
    }

    if (ticketParams.status) {
        params.append("status", ticketParams.status.toString());
    }

    if (ticketParams.priority) {
        params.append("priority", ticketParams.priority.toString());
    }

    if (ticketParams.startDate) {
        params.append("startDate", ticketParams.startDate);
    }

    if (ticketParams.endDate) {
        params.append("endDate", ticketParams.endDate);
    }
    return params;
}

export function getPaginationParams(paginationParams: PaginationParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", paginationParams.pageNumber.toString());
    params.append("pageSize", paginationParams.pageSize.toString());
    if (paginationParams.searchTerm) {
        params.append("searchTerm", paginationParams.searchTerm);
    }
    return params;
}


export function getProjectPhaseTicketParams(paginationParams: ProjectPhaseTicketParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", paginationParams.pageNumber.toString());
    params.append("pageSize", paginationParams.pageSize.toString());
    if (paginationParams.phaseId) {
        params.append("phaseId", paginationParams.phaseId);
    }

    return params;
}