using Application.Core;
using Domain.Models;

namespace Application.Tickets;

public class TicketParams : PaginationParams
{
    public TicketStatus? Status { get; set; }
    public TicketPriority? Priority { get; set; }
    public IssueOccurrence? Occurrence { get; set; }
    public IssueSeverity? Severity { get; set; }
    public IssueNature? Nature { get; set; }
}