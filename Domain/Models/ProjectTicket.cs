namespace Domain.Models;

public class ProjectTicket : BaseAuthorEntity
{
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
    public string Subject { get; set; }
    public string Body { get; set; }
    public TicketPriority Priority { get; set; } = TicketPriority.Low;
    public int? AssignedMemberId { get; set; }
    public ProjectMember? AssignedMember { get; set; }
    public string ProjectId { get; set; }
    public Project Project { get; set; }
    public int? DescriptionId { get; set; }
    public TicketDescription? Description { get; set; }
    public TicketStatus Status { get; set; } = TicketStatus.New;
    public List<TicketComment> Comments { get; set; }
}