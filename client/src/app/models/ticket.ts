import { TicketComment } from "./comment";
import { TicketPriority, TicketStatus } from "./enums";
import { CreateDescription, TicketDescription, UpdateDescription } from "./ticketDescription";


export interface ProjectTicket {
    id: number;
    creationDate: string;
    subject: string;
    body: string;
    priority: TicketPriority;
    projectId: string;
    description: TicketDescription;
    authorId: string;
    author: string;
    status: TicketStatus;
}

export interface TicketFull {
    id: number;
    projectId: string;
    authorId: string;
    author: string;
    creationDate: string;
    subject: string;
    body: string;
    priority: string;
    assignedMemberId: number | null;
    assignedMember: string;
    descriptionId: number | null;
    status: TicketStatus;
    description: TicketDescription;
    comments: TicketComment[];
}

export interface CreateTicket {
    subject: string;
    body: string;
    priority: TicketPriority;
    projectId: string;
    description: CreateDescription;
}

export interface UpdateTicket {
    id: number;
    subject: string;
    body: string;
    priority: TicketPriority;
    projectId: string;
    description: UpdateDescription;
}

export interface UpdateTicketStatus {
    id: number;
    status: TicketStatus;
}