import { IssueOccurrence, IssueSeverity, IssueNature } from "./enums";


export interface TicketDescription {
    operatingSystem: string;
    browser: string;
    occurrence: IssueOccurrence;
    severity: IssueSeverity;
    nature: IssueNature;
    photoId: string;
    photo: string;
    ticketId: number;
}

export interface CreateDescription {
    operatingSystem: string;
    browser: string;
    occurrence: IssueOccurrence;
    severity: IssueSeverity;
    nature: IssueNature;
}

export interface UpdateDescription {
    operatingSystem: string;
    browser: string;
    occurrence: IssueOccurrence;
    severity: IssueSeverity;
    nature: IssueNature;
}