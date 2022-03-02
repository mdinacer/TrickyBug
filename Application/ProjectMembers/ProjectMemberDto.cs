namespace Application.ProjectMembers;

public class ProjectMemberDto
{
    public string UserId { get; set; }
    public string UserName { get; set; }
    public bool IsLeader { get; set; }
    public string Title { get; set; }
    public string Role { get; set; }
}

public class CreateProjectMemberDto
{
    public string ProjectId { get; set; }
    public string UserId { get; set; }
    public bool IsLeader { get; set; }
    public string Title { get; set; }
    public string Role { get; set; }
}

public class UpdateProjectMemberDto
{
    public string UserId { get; set; }
    public string ProjectId { get; set; }
    public bool IsLeader { get; set; }
    public string Title { get; set; }
    public string Role { get; set; }
}