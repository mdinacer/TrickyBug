using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class Details
{
    public class Query : IRequest<Result<ProjectDetailsDto>>
    {
        public string Slug { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<ProjectDetailsDto>>
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

        public async Task<Result<ProjectDetailsDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects
                .Include(p => p.Members)
                .ThenInclude(m => m.User)
                .Include(p => p.Phases)
                .Include(p => p.Photo)
                .Include(p => p.Actions)
                .Include(p => p.Tickets)
                .FirstOrDefaultAsync(x => x.Slug == request.Slug, cancellationToken);

            return Result<ProjectDetailsDto>.Success(_mapper.Map<ProjectDetailsDto>(project));
        }
    }
}