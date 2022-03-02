using AutoMapper;
using Domain.Models;

namespace Application.Tickets;

public class TicketsProfile : Profile
{
    public TicketsProfile()
    {
        CreateMap<ProjectTicket, TicketDto>()
            .ForMember(d => d.Author, o => { o.MapFrom(s => s.Author.DisplayName); });
        //.ForMember(d => d.Priority, o => { o.MapFrom(s => s.Priority.ToString()); });
        CreateMap<ProjectTicket, TicketFullDto>()
            .ForMember(d => d.Description, o => { o.MapFrom(s => s.Description.Nature.ToString()); })
            .ForMember(d => d.Author, o => { o.MapFrom(s => s.Author.DisplayName); });
        CreateMap<CreateTicketDto, ProjectTicket>()
            .ForMember(d => d.Description, o => { o.Ignore(); });
        CreateMap<UpdateTicketDto, ProjectTicket>()
            .ForMember(d => d.Description, o => { o.Ignore(); });


        CreateMap<TicketDescription, TicketDescriptionDto>()
            .ForMember(d => d.Photo, o => { o.MapFrom(s => s.Photo.Url); });

        CreateMap<CreateTicketDescriptionDto, TicketDescription>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
        CreateMap<UpdateTicketDescriptionDto, TicketDescription>()
            .ForMember(d => d.Photo, o => { o.Ignore(); });
    }
}