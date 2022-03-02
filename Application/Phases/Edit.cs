using Application.Core;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Phases;

public class Edit
{
    public class Command : IRequest<Result<PhaseDto>>
    {
        public UpdatePhaseDto Phase { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

    public class Handler : IRequestHandler<Command, Result<PhaseDto>>
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

        public async Task<Result<PhaseDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var phase = await _context.Phases
                .SingleOrDefaultAsync(t => t.Id == request.Phase.Id,  cancellationToken);

            if (phase == null) return Result<PhaseDto>.Failure("Failed to find the requested phase");
            
            var user = await _context.Users.FirstOrDefaultAsync(x => 
                x.UserName == _userAccessor.GetUsername());
            
            if (user == null) return Result<PhaseDto>.Failure("You must be authenticated");
            
            // TODO: Check roles

            _mapper.Map(request.Phase, phase);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<PhaseDto>.Failure("Failed to update the requested phase")
                : Result<PhaseDto>.Success(_mapper.Map<PhaseDto>(phase));
        }
    }
}