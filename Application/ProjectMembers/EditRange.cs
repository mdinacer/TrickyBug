using Application.Core;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProjectMembers;

public class EditRange
{
    public class Command : IRequest<Result<Unit>>
    {
        public List<UpdateProjectMemberDto> Members { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

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
            foreach (var memberDto in request.Members)
            {
                var projectMember = await _context.ProjectMembers
                    .SingleOrDefaultAsync(
                        pm => pm.ProjectId ==memberDto.ProjectId && pm.UserId == memberDto.UserId,
                        cancellationToken);

                if (projectMember == null) return Result<Unit>.Failure("Failed to find project member");


                _mapper.Map(memberDto, projectMember);
            }
            
            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<Unit>.Failure("Failed to update members")
                : Result<Unit>.Success(Unit.Value);
        }
    }
}