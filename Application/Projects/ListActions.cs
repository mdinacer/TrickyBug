using Application.Actions;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Persistence;

namespace Application.Projects;

public class ListActions
{
    public class Query : IRequest<Result<PagedList<ActionDto>>>
    {
        public string Id { get; set; }
        public PaginationParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<ActionDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<PagedList<ActionDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Actions
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.ActionDate)
                .ProjectTo<ActionDto>(_mapper.ConfigurationProvider)
                .AsQueryable();


            return Result<PagedList<ActionDto>>.Success(await PagedList<ActionDto>.CreateAsync(query,
                request.Params.PageNumber,
                request.Params.PageSize));
        }
    }
}