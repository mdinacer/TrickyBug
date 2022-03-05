import { TicketParams } from "../models/ticketParams";

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