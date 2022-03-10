using Application.Core;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class DetailsById
{
    public class Query : IRequest<Result<ProjectDetailsDto>>
    {
        public string Id { get; set; }
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
                .Include(p => p.Tickets)
                .Include(p => p.Phases)
                .Include(p => p.Members)
                .ThenInclude(m => m.User)
                .Include(p => p.Photo)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);


            if (project != null)
            {
                var projectDto = _mapper.Map<ProjectDetailsDto>(project);
                return Result<ProjectDetailsDto>.Success(projectDto);
            }

            return Result<ProjectDetailsDto>.Failure("Sorry, the requested project cannot be found.");
        }
    }
}