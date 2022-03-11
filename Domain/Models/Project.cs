namespace Domain.Models;

public class Project
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Slug { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
    public DateTime? LastUpdate { get; set; }
    public bool IsActive { get; set; } = true;
    public string PhotoId { get; set; }
    public Photo Photo { get; set; }
    public List<ProjectTicket> Tickets { get; set; } = new();
    public List<ProjectAction> Actions { get; set; } = new();
    public List<ProjectMember> Members { get; set; } = new();
    public List<ProjectPhase> Phases { get; set; } = new();

    public int GetTicketsCount()
    {
        return Tickets?.Count() ?? 0;
    }

    public string? GetActualPhase()
    {
        var lastPhase = Phases.LastOrDefault();
        return lastPhase?.Title;
    }
}


