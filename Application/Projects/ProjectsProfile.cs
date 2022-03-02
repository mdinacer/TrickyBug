using AutoMapper;
using Domain.Models;

namespace Application.Projects;

public class ProjectsProfile : Profile
{
    public ProjectsProfile()
    {
        CreateMap<CreateProjectDto, Project>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
        CreateMap<UpdateProjectDto, Project>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
        CreateMap<Project, ProjectDto>()
            .ForMember(d => d.Photo, o => { o.MapFrom(s => s.Photo.Url); });
        CreateMap<Project, ProjectDetailsDto>().ForMember(d => d.Photo, o => { o.MapFrom(s => s.Photo.Url); });
    }
}