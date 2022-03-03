using Application.Core;
using Application.Tickets;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class ListRecentTikcets
{
      public class Query : IRequest<Result<List<TicketDto>>>
    {
        public string Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<List<TicketDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<List<TicketDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var tickets = await _context.Tickets
                .Include(p => p.Description)
                .Include(p => p.Author)
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.CreationDate)
                .Take(5)
                .ProjectTo<TicketDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

           
            return Result<List<TicketDto>>.Success(tickets);
        }
    }
}