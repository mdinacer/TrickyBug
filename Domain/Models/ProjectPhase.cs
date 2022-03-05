namespace Domain.Models;

public class ProjectPhase : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime StartDate { get; set; } = DateTime.UtcNow;
    public DateTime? EndDate { get; set; }
    public string ProjectId { get; set; }
    public Project Project { get; set; }
}