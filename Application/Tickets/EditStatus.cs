using Application.Core;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Slugify;

namespace Application.Tickets;

public class EditStatus
{
    public class Command : IRequest<Result<TicketDto>>
    {
        public UpdateTicketStatusDto TicketStatus { get; set; }
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
            var ticket = await _context.Tickets.Include(t => t.Description)
                .SingleOrDefaultAsync(t => t.Id == request.TicketStatus.Id, cancellationToken);

            if (ticket == null) return Result<TicketDto>.Failure("Failed to find ticket");

            if (ticket.Status != request.TicketStatus.Status)
            {
                ticket.Status = request.TicketStatus.Status;
            }

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<TicketDto>.Failure("Failed to update project")
                : Result<TicketDto>.Success(_mapper.Map<TicketDto>(ticket));
        }
    }
}