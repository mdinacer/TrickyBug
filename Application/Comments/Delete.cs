using Application.Core;
using MediatR;
using Persistence;

namespace Application.Comments;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public int TicketId { get; set; }
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
            var comment = await _context.Comments.FindAsync(request.TicketId);

            if (comment == null) return Result<Unit>.Failure("Unable to find the comment");

            _context.Remove(comment);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result ? Result<Unit>.Failure("Failed to delete the comment") : Result<Unit>.Success(Unit.Value);
        }
    }
}