using Application.Core;
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
        public TicketParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<TicketDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<PagedList<TicketDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Tickets
                .Include(p => p.Description)
                .Include(p => p.Author)
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.CreationDate)
                .ProjectTo<TicketDto>(_mapper.ConfigurationProvider)
                .AsQueryable();

            if (request.Params.Status != null)
            {
                query = query.Where(t => t.Status == request.Params.Status);
            }

            if (request.Params.Priority != null)
            {
                query = query.Where(t => t.Priority == request.Params.Priority);
            }

            if (request.Params.Occurrence != null)
            {
                query = query.Where(t =>
                    t.Description.Occurrence == request.Params.Occurrence);
            }

            if (request.Params.Severity != null)
            {
                query = query.Where(t =>
                    t.Description.Severity == request.Params.Severity);
            }

            if (request.Params.Nature != null)
            {
                query = query.Where(t =>
                    t.Description.Nature == request.Params.Nature);
            }

            return Result<PagedList<TicketDto>>.Success(await PagedList<TicketDto>.CreateAsync(query,
                request.Params.PageNumber,
                request.Params.PageSize));
        }
    }
}