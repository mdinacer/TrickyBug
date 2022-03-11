using Application.Core;
using Application.Interfaces;
using Application.Tickets;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class ListTickets
{
    public class Query : IRequest<Result<PagedList<TicketDto>>>
    {
        public string Id { get; set; }
        public ProjectPhaseTicketParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<TicketDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _mapper = mapper;
            _userAccessor = userAccessor;
            _context = context;
        }

        public async Task<Result<PagedList<TicketDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Tickets
                .Include(p => p.Description)
                .Include(p => p.Author)
                .Include(p => p.AssignedMember)
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.CreationDate)
                .ProjectTo<TicketDto>(_mapper.ConfigurationProvider,new { currentUsername = _userAccessor.GetUsername() })
                .AsQueryable();

            if (request.Params.PhaseId != null)
            {
                var phase = await _context.Phases.FindAsync(request.Params.PhaseId);

                if (phase != null)
                {
                    query = query.Where(t =>
                        t.CreationDate.Date >= phase.StartDate.Date);
                    if (phase.EndDate != null)
                        query = query.Where(t =>
                            t.CreationDate.Date <= phase.EndDate.Value.Date);
                }
            }

         

            return Result<PagedList<TicketDto>>.Success(await PagedList<TicketDto>.CreateAsync(query,
                request.Params.PageNumber,
                request.Params.PageSize));
        }
    }
}