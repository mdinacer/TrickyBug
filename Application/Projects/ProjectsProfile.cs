using AutoMapper;
using Domain.Models;

namespace Application.Projects;

public class ProjectsProfile : Profile
{
    public ProjectsProfile()
    {
        string? currentUsername = null;
        CreateMap<CreateProjectDto, Project>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
        CreateMap<UpdateProjectDto, Project>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
        CreateMap<Project, ProjectDto>()
            .ForMember(d => d.Photo, o => { o.MapFrom(s => s.Photo.Url); })
            .ForMember(d => d.IsMember,
                o => { o.MapFrom(s => s.Members.Any(m => m.User.UserName == currentUsername)); })
            .ForMember(d => d.IsLeader,
                o => { o.MapFrom(s => s.Members.Any(m => m.User.UserName == currentUsername && m.IsLeader)); });
        CreateMap<Project, ProjectDetailsDto>()
            .ForMember(d => d.IsMember,
                o => { o.MapFrom(s => s.Members.Any(m => m.User.UserName == currentUsername)); })
            .ForMember(d => d.IsLeader,
                o => { o.MapFrom(s => s.Members.Any(m => m.User.UserName == currentUsername && m.IsLeader)); })
            .ForMember(d => d.Photo, o => { o.MapFrom(s => s.Photo.Url); });
    }
}