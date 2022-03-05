using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Tickets;

public class Details
{
    public class Query : IRequest<Result<TicketFullDto>>
    {
        public int Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<TicketFullDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _userAccessor = userAccessor;
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<TicketFullDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var ticket = await _context.Tickets
                .Include(p => p.Description)
                .ThenInclude(d => d.Photo)
                .Include(p => p.Author)
                .Include(p => p.Project)
                .ProjectTo<TicketFullDto>(_mapper.ConfigurationProvider)
               .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (ticket != null)
            {
                var phase = await _context.Phases.Where(p =>
                    p.ProjectId == ticket.ProjectId && p.StartDate < ticket.CreationDate)
                    .OrderBy(p => p.StartDate).LastOrDefaultAsync(cancellationToken: cancellationToken);
               
                ticket.Phase = phase;
                if (phase != null)
                {
                    ticket.Actions = await _context.Actions
                        .Where(a => a.ProjectId == ticket.ProjectId
                                    && a.ActionDate >= phase.StartDate
                                    && a.ActionDate <= ticket.CreationDate)
                        .ToListAsync(cancellationToken);
                }
            }

            return Result<TicketFullDto>.Success(ticket);
        }
    }
}