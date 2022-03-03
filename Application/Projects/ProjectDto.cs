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
    public List<TicketDto> Tickets { get; set; } = new();
    public List<ActionDto> Actions { get; set; } = new();
    public List<ProjectMemberDto> Members { get; set; } = new();
    public List<PhaseDto> Phases { get; set; } = new();
    public int TicketsCount { get; set; }
    public string ActualPhase { get; set; }
}

public class CreateProjectDto
{
    [Required] public string Title { get; set; }

    [Required] public string Description { get; set; }

    public IFormFile? Photo { get; set; }
}

public class UpdateProjectDto
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public IFormFile? Photo { get; set; }
}