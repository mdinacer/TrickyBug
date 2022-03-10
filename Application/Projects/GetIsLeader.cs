using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects;

public class GetIsLeader
{
    public class Query : IRequest<Result<bool>>
    {
        public string Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<bool>>
    {
        private readonly DataContext _context;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IUserAccessor userAccessor)
        {
            _userAccessor = userAccessor;
            _context = context;
        }

        public async Task<Result<bool>> Handle(Query request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.UserName == _userAccessor.GetUsername(), cancellationToken);
            
            if(user == null) return Result<bool>.Failure("Sorry, you must be authorized.");


            var member = await _context.ProjectMembers.SingleOrDefaultAsync(m =>
                m.ProjectId == request.Id && m.UserId == user.Id && m.IsLeader, cancellationToken);

            return Result<bool>.Success(member != null);
        }
    }
}