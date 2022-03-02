using Application.Core;
using MediatR;
using Persistence;

namespace Application.Tickets;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
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
            var ticket = await _context.Tickets.FindAsync(request.Id);

            if (ticket == null) return Result<Unit>.Failure("Unable to find the ticket");

            _context.Remove(ticket);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result ? Result<Unit>.Failure("Failed to delete the ticket") : Result<Unit>.Success(Unit.Value);
        }
    }
}