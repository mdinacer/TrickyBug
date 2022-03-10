using System.ComponentModel.DataAnnotations;
using Application.Actions;
using Application.Phases;
using Application.ProjectMembers;
using Application.Tickets;
using Microsoft.AspNetCore.Http;

namespace Application.Projects;

public class ProjectDto
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Slug { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
    public DateTime? LastUpdate { get; set; }
    public bool isActive { get; set; }
    public string PhotoId { get; set; }
    public string Photo { get; set; }
    public int TicketsCount { get; set; }
    public string ActualPhase { get; set; }
    public bool IsMember { get; set; }
    public bool IsLeader { get; set; }


}

public class ProjectDetailsDto
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Slug { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
    public DateTime? LastUpdate { get; set; }
    public bool isActive { get; set; }
    public string PhotoId { get; set; }
    public string Photo { get; set; }
    public bool IsMember { get; set; }
    public bool IsLeader { get; set; }
    public int TicketsCount { get; set; }
    public string ActualPhase { get; set; }
}

public class CreateProjectDto
{
    [Required] public string Title { get; set; }

    [Required] public string Description { get; set; }

    public IFormFile? File { get; set; }
    public List<CreateProjectMemberDto>? Members { get; set; }
}

public class UpdateProjectDto
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public IFormFile? File { get; set; }
}