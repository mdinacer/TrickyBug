using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProjectMembers;

public class DeleteRange
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public List<string> MembersId { get; set; }
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
            foreach (var memberId in request.MembersId)
            {
                var projectMember = await _context.ProjectMembers
                    .SingleOrDefaultAsync(
                        pm => pm.ProjectId == request.Id && pm.UserId == memberId,
                        cancellationToken);

                if (projectMember != null)
                {
                    _context.Remove(projectMember);
                }
            }

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<Unit>.Failure("Failed to delete the project member")
                : Result<Unit>.Success(Unit.Value);
        }
    }
}