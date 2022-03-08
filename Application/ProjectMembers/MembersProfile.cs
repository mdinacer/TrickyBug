using AutoMapper;
using Domain.Models;

namespace Application.ProjectMembers;

public class MembersProfile : Profile
{
    public MembersProfile()
    {
        CreateMap<ProjectMember, ProjectMemberDto>()
            .ForMember(d => d.UserName, o => { o.MapFrom(s => s.User.DisplayName); })
            .ForMember(d => d.Title, o => { o.MapFrom(s => s.User.Title); });

        CreateMap<CreateProjectMemberDto, ProjectMember>();
        CreateMap<UpdateProjectMemberDto, ProjectMember>();
        //CreateMap<ProjectMember, ProjectMemberDto>()
          //  .ForMember(d => d.UserName, o => { o.MapFrom(s => s.User.DisplayName); });
    }
}