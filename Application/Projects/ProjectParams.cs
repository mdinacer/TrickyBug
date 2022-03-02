using Application.Core;

namespace Application.Projects;

public class ProjectParams : PaginationParams
{
    public bool? IsLead { get; set; }
    public bool? IsMember { get; set; }
}