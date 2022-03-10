namespace Application.ProjectMembers;

public class ProjectMemberDto
{
    public string UserId { get; set; }
    public string UserName { get; set; }
    public string Title { get; set; }
    public bool IsLeader { get; set; }
}



public class DeleteMembersDto  
{
    public string ProjectId { get; set; }
    public List<string> MembersId { get; set; }
}

public class CreateProjectMemberDto
{
    public string UserId { get; set; }
    public bool IsLeader { get; set; }
}

public class UpdateProjectMemberDto
{
    public string UserId { get; set; }
    public string ProjectId { get; set; }
    public bool IsLeader { get; set; }
}