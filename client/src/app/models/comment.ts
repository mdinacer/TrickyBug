export interface TicketComment {
    id: number;
    authorId: string;
    author: string;
    title: string;
    body: string;
    ticketId: number;
    creationDate: string;
}

export interface CreateComment {
    title: string;
    body: string;
}

export interface UpdateComment {
    id: number;
    title: string;
    body: string;
}