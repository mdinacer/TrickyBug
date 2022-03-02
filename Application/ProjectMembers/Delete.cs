using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProjectMembers;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public string MemberId { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var projectMember = await _context.ProjectMembers
                .SingleOrDefaultAsync(
                    pm => pm.ProjectId == request.Id && pm.UserId == request.MemberId,
                    cancellationToken);

            if (projectMember == null) return Result<Unit>.Failure("Unable to find the project member");
            ;

            _context.Remove(projectMember);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<Unit>.Failure("Failed to delete the project member")
                : Result<Unit>.Success(Unit.Value);
        }
    }
}