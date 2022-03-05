using Application.Core;
using Domain.Models;

namespace Application.Tickets;

public class TicketParams : PaginationParams
{
    public TicketStatus? Status { get; set; }
    public TicketPriority? Priority { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string? SearchTerm { get; set; }
}
