using Application.Core;
using Application.Interfaces;
using Application.Projects;
using AutoMapper;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Slugify;

namespace Application.Tickets;

public class Edit
{
    public class Command : IRequest<Result<TicketDto>>
    {
        public UpdateTicketDto Ticket { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

    public class Handler : IRequestHandler<Command, Result<TicketDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IPhotoAccessor _photoAccessor;
        private readonly ISlugHelper _slugHelper;

        public Handler(DataContext context, IMapper mapper, ISlugHelper slugHelper, IPhotoAccessor photoAccessor)
        {
            _mapper = mapper;
            _slugHelper = slugHelper;
            _photoAccessor = photoAccessor;
            _context = context;
        }

        public async Task<Result<TicketDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var ticket = await _context.Tickets
                .Include(t => t.Description)
                .SingleOrDefaultAsync(t => t.Id == request.Ticket.Id,  cancellationToken);

            if (ticket == null) return Result<TicketDto>.Failure("Failed to find ticket");

            _mapper.Map(request.Ticket, ticket);
            
            if (ticket.Description != null && request.Ticket.Description.File != null)
            {
                if (!string.IsNullOrEmpty(ticket.Description.PhotoId))
                {
                    await _photoAccessor.DeletePhoto(ticket.Description.PhotoId);
                    ticket.Description.PhotoId = "";
                }

                var photoUploadResult = await _photoAccessor.AddPhoto(request.Ticket.Description.File);
                ticket.Description.Photo = new Photo
                {
                    Url = photoUploadResult.Url,
                    Id = photoUploadResult.PublicId
                };
            }

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<TicketDto>.Failure("Failed to update project")
                : Result<TicketDto>.Success(_mapper.Map<TicketDto>(ticket));
        }
    }
}