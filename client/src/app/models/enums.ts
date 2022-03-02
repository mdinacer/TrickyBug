export enum IssueOccurrence {
    Persistent,
    Frequent,
    Random,
    Rare
}

export enum TicketStatus {
    New,
    Assigned,
    Open,
    Fixed,
    Pending,
    Retest,
    Verified,
    Reopen,
    Closed,
    Duplicate,
    Rejected,
    Deferred,
    NotBug
}

export enum TicketPriority {
    Low,
    Medium,
    High,
    Urgent
}

export enum IssueSeverity {
    Low,
    Medium,
    High,
    Critical
}

export enum IssueNature {
    Functional,
    Performance,
    Usability,
    Compatibility,
    Security
}