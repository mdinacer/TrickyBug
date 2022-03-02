using Application.Core;
using Application.Interfaces;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Actions;

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
        private readonly UserManager<AppUser> _userManager;

        public Handler(DataContext context, IUserAccessor userAccessor, UserManager<AppUser> userManager)
        {
            _context = context;
            _userAccessor = userAccessor;
            _userManager = userManager;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var ticket = await _context.Actions.FindAsync(request.Id);

            if (ticket == null) return Result<Unit>.Failure("Unable to find the ticket");

            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.UserName == _userAccessor.GetUsername());

            if (user == null) return Result<Unit>.Failure("You must be authenticated");

            var isAdmin = await _userManager.IsInRoleAsync(user,"Admin");
            
            if(!isAdmin || ticket.AuthorId != user.Id) return Result<Unit>.Failure("You are not authorized");

            _context.Remove(ticket);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result ? Result<Unit>.Failure("Failed to delete the action") : Result<Unit>.Success(Unit.Value);
        }
    }
}