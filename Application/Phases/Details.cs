using Application.Actions;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Phases;

public class Details
{
    public class Query : IRequest<Result<PhaseDto>>
    {
        public int Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PhaseDto>>
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

        public async Task<Result<PhaseDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var phase = await _context.Phases
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (phase == null) return Result<PhaseDto>.Failure("Unable to find action");

            var user = await _context.Users.FirstOrDefaultAsync(x =>
                x.UserName == _userAccessor.GetUsername());

            if (user == null) return Result<PhaseDto>.Failure("You must be authenticated");

            // TODO: Check if user is Admin or Action author

            return Result<PhaseDto>.Success(_mapper.Map<PhaseDto>(phase));
        }
    }
}