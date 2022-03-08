namespace Domain.Models;

public class ProjectMember
{
    public string UserId { get; set; }
    public AppUser User { get; set; }
    public string ProjectId { get; set; }
    public Project Project { get; set; }
    public bool IsLeader { get; set; }
    public string Role { get; set; }
}