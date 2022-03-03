using Application.Actions;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class ListRecentActions
{
    public class Query : IRequest<Result<List<ActionDto>>>
    {
        public string Id { get; set; }
        public PaginationParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<List<ActionDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<List<ActionDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var actions = await _context.Actions
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.ActionDate)
                .Take(5)
                .ProjectTo<ActionDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);


            return Result<List<ActionDto>>.Success(actions);
        }
    }
}