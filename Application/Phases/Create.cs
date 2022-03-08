using Application.Actions;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Phases;

public class Create
{
    public class Command : IRequest<Result<PhaseDto>>
    {
        public string ProjectId { get; set; }
        public CreatePhaseDto Phase { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
           // RuleFor(x => x.Ticket).SetValidator(new CreateProjectValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<PhaseDto>>
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

        public async Task<Result<PhaseDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects
                .Include(p => p.Phases)
                .SingleOrDefaultAsync(p=> p.Id== request.ProjectId, cancellationToken);

            if (project == null) return Result<PhaseDto>.Failure("Unable to find project");

            var user = await _context.Users.FirstOrDefaultAsync(x => 
                x.UserName == _userAccessor.GetUsername(), cancellationToken);
            
            if (user == null) return Result<PhaseDto>.Failure("You must be authenticated");
            
            // TODO: Check if user is Admin or Project Member

            var phase = _mapper.Map<ProjectPhase>(request.Phase);
            
            phase.Project = project;
            phase.StartDate = DateTime.UtcNow;
            
            var lastPhase = project.Phases.LastOrDefault();

            if (lastPhase != null)
            {
                lastPhase.EndDate = DateTime.UtcNow;
            }
            
            _context.Phases.Add(phase);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            var actionDto = _mapper.Map<PhaseDto>(phase);

            return !result
                ? Result<PhaseDto>.Failure("Failed to create action")
                : Result<PhaseDto>.Success(actionDto);
        }
    }
}