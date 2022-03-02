namespace Domain.Models;

public class TicketDescription : BaseEntity
{
    public string OperatingSystem { get; set; }
    public string Browser { get; set; }
    public IssueOccurrence Occurrence { get; set; } = IssueOccurrence.Persistent;
    public IssueSeverity Severity { get; set; } = IssueSeverity.Medium;
    public IssueNature Nature { get; set; } = IssueNature.Performance;
    public string PhotoId { get; set; }
    public Photo Photo { get; set; }
    public int TicketId { get; set; }
    public ProjectTicket Ticket { get; set; }
}