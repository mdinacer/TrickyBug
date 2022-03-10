using Application.Comments;
using Domain.Models;

namespace Application.Tickets;

public class TicketDto
{
    public int Id { get; set; }
    public DateTime CreationDate { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }
    public TicketPriority Priority { get; set; }
    public string ProjectId { get; set; }
    public string Project { get; set; }
    public TicketDescriptionDto Description { get; set; }
    public string AuthorId { get; set; }
    public string Author { get; set; }
    public TicketStatus Status { get; set; }
    public bool IsAuthor { get; set; }
    public bool IsAssigned { get; set; }
}

public class TicketFullDto
{
    public int Id { get; set; }
    public string ProjectId { get; set; }
    public string Project { get; set; }
    public string AuthorId { get; set; }
    public string Author { get; set; }
    public DateTime CreationDate { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }
    public string Priority { get; set; }
    public string? AssignedMemberId { get; set; }
    public string? AssignedMember { get; set; }
    public int? DescriptionId { get; set; }
   
    public string Status { get; set; }
    public TicketDescriptionDto Description { get; set; }
    public List<TicketCommentDto> Comments { get; set; }
    public ProjectPhase? Phase { get; set; }
    public List<ProjectAction>? Actions { get; set; }
    public bool IsAuthor { get; set; }
    public bool IsAssigned { get; set; }
}

public class CreateTicketDto
{
    public string Subject { get; set; }
    public string Body { get; set; }
    public TicketPriority Priority { get; set; }
    public string ProjectId { get; set; }
    public CreateTicketDescriptionDto Description { get; set; }
    
}

public class UpdateTicketDto
{
    public int Id { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }
    public TicketPriority Priority { get; set; }
    public string ProjectId { get; set; }
    public UpdateTicketDescriptionDto Description { get; set; }
    public string? AssignedMemberId { get; set; }
    public TicketStatus Status { get; set; }
}

public class UpdateTicketStatusDto
{
    public int Id { get; set; }
    public TicketStatus Status { get; set; }
}