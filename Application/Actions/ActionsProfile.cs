using AutoMapper;
using Domain.Models;

namespace Application.Actions;

public class ActionsProfile : Profile
{
    public ActionsProfile()
    {
        string currentUser = null;
        CreateMap<ProjectAction, ActionDto>()
            .ForMember(d => d.Author, o =>
            {
                o.MapFrom(s => s.Author.DisplayName);
            })
            .ForMember(d => d.IsAuthor,
                o => o.MapFrom(s => s.AuthorId == currentUser));;
        CreateMap<CreateActionDto, ProjectAction>();
        CreateMap<UpdateActionDto, ProjectAction>();
    }
}