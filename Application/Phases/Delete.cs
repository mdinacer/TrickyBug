using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Phases;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IUserAccessor userAccessor)
        {
            _context = context;
            _userAccessor = userAccessor;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var phase = await _context.Phases.FindAsync(request.Id);

            if (phase == null) return Result<Unit>.Failure("Unable to find the requested phase");

            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.UserName == _userAccessor.GetUsername());

            if (user == null) return Result<Unit>.Failure("You must be authenticated");

            // TODO: Check if user is Admin or Action Author or Project Lead

            _context.Remove(phase);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result ? Result<Unit>.Failure("Failed to delete the requested phase") : Result<Unit>.Success(Unit.Value);
        }
    }
}