using Application.Core;
using Application.ProjectMembers;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class ListMembers
{
    public class Query : IRequest<Result<List<ProjectMemberDto>>>
    {
        public string Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<List<ProjectMemberDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<List<ProjectMemberDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var members = await _context.ProjectMembers
                .Include(p => p.User)
                .Where(p => p.ProjectId == request.Id)
                .OrderBy(d => d.User.DisplayName)
                .ProjectTo<ProjectMemberDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return Result<List<ProjectMemberDto>>.Success(members);
        }
    }
}