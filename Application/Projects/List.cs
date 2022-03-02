using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Persistence;

namespace Application.Projects;

public class List
{
    public class Query : IRequest<Result<PagedList<ProjectDto>>>
    {
        public ProjectParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<ProjectDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<PagedList<ProjectDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Projects
                .OrderBy(d => d.CreationDate)
                .ProjectTo<ProjectDto>(_mapper.ConfigurationProvider)
                .AsQueryable();
            
            //if (request.Params.IsLead != null) query = query.Where(t => t.Status == request.Params.Status);

            return Result<PagedList<ProjectDto>>.Success(
                await PagedList<ProjectDto>.CreateAsync(query, request.Params.PageNumber,
                    request.Params.PageSize)
            );
        }
    }
}