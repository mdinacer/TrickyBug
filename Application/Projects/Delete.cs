using Application.Core;
using MediatR;
using Persistence;

namespace Application.Projects;

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
            var project = await _context.Projects.FindAsync(request.Id);

            if (project == null) return Result<Unit>.Failure("Unable to find the project");
            ;

            _context.Remove(project);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result ? Result<Unit>.Failure("Failed to delete the project") : Result<Unit>.Success(Unit.Value);
        }
    }
}