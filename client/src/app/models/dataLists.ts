import { IssueOccurrence, IssueSeverity, IssueNature, TicketPriority, TicketStatus } from "./enums";

export const SortOptions = [
    { name: "Name", value: "name" },
    { name: "Recently Added", value: "added" },
    { name: "Recently Updated", value: "updated" },
];


const ticketDescription = {
    operatingSystem: "Mac OS Monterey",
    browser: "Chrome Latest",
    occurrence: IssueOccurrence.Persistent,
    severity: IssueSeverity.Critical,
    nature: IssueNature.Functional,
};

export const Tickets = [
    {
        id: 1,
        creationDate: "2022-02-5",
        subject: "Server not responding",
        body: "Server stop responding after adding a new item",
        priority: TicketPriority.Medium,
        description: ticketDescription,
        author: "Tom Hardy",
        status: TicketStatus.New,
    },
    {
        id: 2,
        creationDate: "2022-02-15",
        subject: "UI not responsive",
        body: "The user interface doesn't support mobile display",
        priority: TicketPriority.Medium,
        description: ticketDescription,
        author: "Jake Jackson",
        status: TicketStatus.Pending,
    },
    {
        id: 3,
        creationDate: "2022-02-13",
        subject: "Can't access the profile",
        body: "when I try to access my profile I get a 500 error",
        priority: TicketPriority.Urgent,
        description: ticketDescription,
        author: "Lilly Morison",
        status: TicketStatus.Fixed,
    },
    {
        id: 4,
        creationDate: "2022-02-8",
        subject: "Server not responding",
        body: "Server stop responding after adding a new Product",
        priority: TicketPriority.Medium,
        description: ticketDescription,
        author: "Jimmy Useless",
        status: TicketStatus.Duplicate,
    },
    {
        id: 5,
        creationDate: "2022-02-5",
        subject: "The response time is big",
        body: "Server is slow",
        priority: TicketPriority.Low,
        description: ticketDescription,
        author: "Mark Flash",
        status: TicketStatus.Deferred,
    },
];