namespace Domain.Models;

public class ProjectAction : BaseAuthorEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime ActionDate { get; set; }
    public string ProjectId { get; set; }
    public Project Project { get; set; }
   
}