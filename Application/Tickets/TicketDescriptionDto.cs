using Domain.Models;
using Microsoft.AspNetCore.Http;

namespace Application.Tickets;

public class TicketDescriptionDto
{
    public string OperatingSystem { get; set; }
    public string Browser { get; set; }
    public IssueOccurrence Occurrence { get; set; }
    public IssueSeverity Severity { get; set; }
    public IssueNature Nature { get; set; }
    public string PhotoId { get; set; }
    public string Photo { get; set; }
    public int TicketId { get; set; }
}

public class CreateTicketDescriptionDto
{
    public string OperatingSystem { get; set; }
    public string Browser { get; set; }
    public IssueOccurrence Occurrence { get; set; }
    public IssueSeverity Severity { get; set; }
    public IssueNature Nature { get; set; }
    public IFormFile Photo { get; set; }
   // public int TicketId { get; set; }
}

public class UpdateTicketDescriptionDto
{
    public string OperatingSystem { get; set; }
    public string Browser { get; set; }
    public IssueOccurrence Occurrence { get; set; }
    public IssueSeverity Severity { get; set; }
    public IssueNature Nature { get; set; }
    public IFormFile Photo { get; set; }
   // public int TicketId { get; set; }
}