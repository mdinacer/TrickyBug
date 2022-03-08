using Application.Core;

namespace Application.Projects;

public class ProjectParams : PaginationParams
{
    public bool IsMember { get; set; }
    public string OrderBy { get; set; } = "name";
    public string? SearchTerm { get; set; }
}