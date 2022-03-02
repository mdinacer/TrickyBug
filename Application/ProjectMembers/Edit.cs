using Application.Core;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProjectMembers;

public class Edit
{
    public class Command : IRequest<Result<ProjectMemberDto>>
    {
        public UpdateProjectMemberDto Member { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

    public class Handler : IRequestHandler<Command, Result<ProjectMemberDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<ProjectMemberDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var projectMember = await _context.ProjectMembers
                .SingleOrDefaultAsync(
                    pm => pm.ProjectId == request.Member.ProjectId && pm.UserId == request.Member.UserId,
                    cancellationToken);

            if (projectMember == null) return Result<ProjectMemberDto>.Failure("Failed to find project member");


            _mapper.Map(request.Member, projectMember);

            
            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<ProjectMemberDto>.Failure("Failed to update project")
                : Result<ProjectMemberDto>.Success(_mapper.Map<ProjectMemberDto>(projectMember));
        }
    }
}