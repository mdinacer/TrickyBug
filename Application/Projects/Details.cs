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
                .Include(p => p.Tickets)
                .Include(p => p.Phases)
                .Include(p => p.Members)
                .ThenInclude(m => m.User)
                .Include(p => p.Photo)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Slug == request.Slug, cancellationToken);


            if (project != null)
            {
                // var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(x =>
                //     x.UserName == _userAccessor.GetUsername(), cancellationToken);
                //
                // if (user == null) return Result<ProjectDetailsDto>.Failure("You must be authenticated");
                //
                // var projectMember = project.Members
                //     .SingleOrDefault(pm => pm.ProjectId == project.Id && pm.UserId == user.Id);
                //     
                // var projectDto = _mapper.Map<ProjectDetailsDto>(project);
                //
                // if (projectMember != null)
                // {
                //     projectDto.IsMember = true;
                //     projectDto.IsLeader = projectMember.IsLeader;
                // }
                var projectDto = _mapper.Map<ProjectDetailsDto>(project);
                return Result<ProjectDetailsDto>.Success(projectDto);
            }

            return Result<ProjectDetailsDto>.Failure("Sorry, the requested project cannot be found.");
        }
    }
}