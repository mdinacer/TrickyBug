using Application.Core;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Actions;

public class Edit
{
    public class Command : IRequest<Result<ActionDto>>
    {
        public UpdateActionDto Action { get; set; }
    }

    // public class CommandValidator : AbstractValidator<Command>
    // {
    //     public CommandValidator()
    //     {
    //         RuleFor(x => x.Project).SetValidator(new UpdateProjectValidator());
    //     }
    // }

    public class Handler : IRequestHandler<Command, Result<ActionDto>>
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

        public async Task<Result<ActionDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var action = await _context.Actions
                .SingleOrDefaultAsync(t => t.Id == request.Action.Id,  cancellationToken);

            if (action == null) return Result<ActionDto>.Failure("Failed to find action");
            
            var user = await _context.Users.FirstOrDefaultAsync(x => 
                x.UserName == _userAccessor.GetUsername(), cancellationToken: cancellationToken);
            
            if (user == null) return Result<ActionDto>.Failure("You must be authenticated");
            
            // TODO: Check roles

            _mapper.Map(request.Action, action);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return !result
                ? Result<ActionDto>.Failure("Failed to update action")
                : Result<ActionDto>.Success(_mapper.Map<ActionDto>(action));
        }
    }
}