using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Actions;

public class List
{
    public class Query : IRequest<Result<List<ActionDto>>>
    {
    }

    public class Handler : IRequestHandler<Query, Result<List<ActionDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _mapper = mapper;
            _userAccessor = userAccessor;
            _context = context;
            
        }

        public async Task<Result<List<ActionDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => 
                x.UserName == _userAccessor.GetUsername());
            
            if (user == null) return Result<List<ActionDto>>.Failure("You must be authenticated");
            
            
            // TODO: Add Admin Role Authentication in Controller
            var actions = await _context.Actions
                .OrderBy(d => d.ActionDate)
                .ProjectTo<ActionDto>(_mapper.ConfigurationProvider,new { currentUser = user.Id })
                .ToListAsync(cancellationToken: cancellationToken);
            

            return Result<List<ActionDto>>.Success(actions);
        }
    }
}