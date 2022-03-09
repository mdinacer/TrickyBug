using Application.Core;
using AutoMapper;
using Domain.Models;
using MediatR;
using Persistence;

namespace Application.ProjectMembers;

public class AddRange
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public List<CreateProjectMemberDto> Members { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects.FindAsync(request.Id);

            if (project == null) return Result<Unit>.Failure("Unable to find project");
            
            var membersList = (from member in request.Members
                where !_context.ProjectMembers.Any(pm => pm.ProjectId == project.Id && pm.UserId == member.UserId)
                select _mapper.Map<ProjectMember>(member)).ToList();
            
            membersList.ForEach(m => m.ProjectId = project.Id);

            _context.ProjectMembers.AddRange(membersList);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;


            return !result
                ? Result<Unit>.Failure("Failed to create project")
                : Result<Unit>.Success(Unit.Value);
        }
    }
}