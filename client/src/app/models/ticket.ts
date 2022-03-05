import { ProjectAction } from "./action";
import { TicketComment } from "./comment";
import { TicketPriority, TicketStatus } from "./enums";
import { ProjectPhase } from "./phase";
import { CreateDescription, TicketDescription, UpdateDescription } from "./ticketDescription";


export interface ProjectTicket {
    id: number;
    creationDate: string;
    subject: string;
    body: string;
    priority: TicketPriority;
    projectId: string;
    project: string;
    //description: TicketDescription;
    authorId: string;
    author: string;
    status: TicketStatus;
}

export interface ProjectTicketFull {
    id: number;
    projectId: string;
    project: string;
    authorId: string;
    author: string;
    creationDate: string;
    subject: string;
    body: string;
    priority: TicketPriority;
    assignedMemberId: number | null;
    assignedMember: string;
    descriptionId: number | null;
    status: TicketStatus;
    description: TicketDescription;
    comments: TicketComment[];
    actions?: ProjectAction[];
    phase?: ProjectPhase
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