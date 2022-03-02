using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Actions;

public class Create
{
    public class Command : IRequest<Result<ActionDto>>
    {
        public string ProjectId { get; set; }
        public CreateActionDto Action { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
           // RuleFor(x => x.Ticket).SetValidator(new CreateProjectValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<ActionDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
            _userAccessor = userAccessor;
        }

        public async Task<Result<ActionDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects.FindAsync(request.ProjectId);

            if (project == null) return Result<ActionDto>.Failure("Unable to find project");

            var user = await _context.Users.FirstOrDefaultAsync(x => 
                x.UserName == _userAccessor.GetUsername());
            
            if (user == null) return Result<ActionDto>.Failure("You must be authenticated");
            
            // TODO: Check if user is Admin or Project Member

            var action = _mapper.Map<ProjectAction>(request.Action);
            action.Project = project;
            action.Author = user;
            action.ActionDate = DateTime.UtcNow;
            
            _context.Actions.Add(action);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            var actionDto = _mapper.Map<ActionDto>(action);

            return !result
                ? Result<ActionDto>.Failure("Failed to create action")
                : Result<ActionDto>.Success(actionDto);
        }
    }
}