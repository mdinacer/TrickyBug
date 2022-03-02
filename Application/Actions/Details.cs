using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Actions;

public class Details
{
    public class Query : IRequest<Result<ActionDto>>
    {
        public int Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<ActionDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _userAccessor = userAccessor;
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<ActionDto>> Handle(Query request, CancellationToken cancellationToken)
        { 
            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.UserName == _userAccessor.GetUsername(), cancellationToken: cancellationToken);

            if (user == null) return Result<ActionDto>.Failure("You must be authenticated");
            
            var action = await _context.Actions
                .ProjectTo<ActionDto>(_mapper.ConfigurationProvider,new { currentUser = user.Id })
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (action == null) return Result<ActionDto>.Failure("Unable to find action");

            return Result<ActionDto>.Success(action);
        }
    }
}