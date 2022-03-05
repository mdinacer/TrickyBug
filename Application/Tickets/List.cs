using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Tickets;

public class List
{
    public class Query : IRequest<Result<PagedList<TicketDto>>>
    {
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
                .OrderBy(d => d.CreationDate)
                .ProjectTo<TicketDto>(_mapper.ConfigurationProvider)
                .AsQueryable();

            if (request.Params.SearchTerm != null)
                query = query.Where(t => t.Subject.Contains(request.Params.SearchTerm));

            if (request.Params.Status != null) 
                query = query.Where(t => t.Status == request.Params.Status);

            if (request.Params.Priority != null) query = query.Where(t => t.Priority == request.Params.Priority);
            
            if (request.Params.StartDate != null)
                query = query.Where(t =>
                    t.CreationDate.Date >= request.Params.StartDate.Value.Date);

            if (request.Params.EndDate != null)
                query = query.Where(t =>
                    t.CreationDate.Date <= request.Params.EndDate.Value.Date);

            return Result<PagedList<TicketDto>>.Success(await PagedList<TicketDto>.CreateAsync(query,
                request.Params.PageNumber,
                request.Params.PageSize));
        }
    }
}