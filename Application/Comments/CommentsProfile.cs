using AutoMapper;
using Domain.Models;

namespace Application.Comments;

public class CommentsProfile : Profile
{
    public CommentsProfile()
    {
        CreateMap<TicketComment, TicketCommentDto>()
            .ForMember(d => d.Author, o =>
            {
                o.MapFrom(s => s.Author.DisplayName);
            });
        CreateMap<CreateTicketCommentDto, TicketComment>();
        CreateMap<UpdateTicketCommentDto, TicketComment>();
    }
}