using AutoMapper;
using Domain.Models;

namespace Application.Tickets;

public class TicketsProfile : Profile
{
    public TicketsProfile()
    {
        string? currentUsername = null;
        CreateMap<ProjectTicket, TicketDto>()
            .ForMember(d => d.Author, o => { o.MapFrom(s => s.Author.DisplayName); })
            .ForMember(d => d.IsAuthor,
                o => { o.MapFrom(s => s.Author.UserName == currentUsername); })
            .ForMember(d => d.IsAssigned,
                o => { o.MapFrom(s => s.AssignedMember != null && s.AssignedMember.UserName == currentUsername); })
            .ForMember(d => d.Project, o => { o.MapFrom(s => s.Project.Title); });
        //.ForMember(d => d.Priority, o => { o.MapFrom(s => s.Priority.ToString()); });
        CreateMap<ProjectTicket, TicketFullDto>()
            .ForMember(d => d.Author, o => { o.MapFrom(s => s.Author.DisplayName); })
            .ForMember(d => d.AssignedMember, o => { o.MapFrom(s => s.AssignedMember.DisplayName); })
            .ForMember(d => d.IsAuthor,
                o => { o.MapFrom(s => s.Author.UserName == currentUsername); })
            .ForMember(d => d.IsAssigned,
                o => { o.MapFrom(s => s.AssignedMember != null && s.AssignedMember.UserName == currentUsername); })
            .ForMember(d => d.Project, o => { o.MapFrom(s => s.Project.Title); });
        CreateMap<CreateTicketDto, ProjectTicket>();
        CreateMap<UpdateTicketDto, ProjectTicket>()
            .ForMember(d => d.Id, o => { o.Ignore(); });


        CreateMap<TicketDescription, TicketDescriptionDto>()
            .ForMember(d => d.Photo, o => { o.MapFrom(s => s.Photo.Url); });

        CreateMap<CreateTicketDescriptionDto, TicketDescription>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
        CreateMap<UpdateTicketDescriptionDto, TicketDescription>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
    }
}