using Application.Core;
using Application.Projects;
using Application.Validators;
using AutoMapper;
using Domain.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProjectMembers;

public class Add
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public CreateProjectMemberDto Member { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Member).SetValidator(new ProjectMemberValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var project = await _context.Projects.FindAsync(request.Id);
            var user = await _context.Users.FindAsync(request.Member.UserId);

            if (project == null) return Result<Unit>.Failure("Unable to find project");
            if (user == null) return Result<Unit>.Failure("Unable to find User");

            var projectMember = await _context.ProjectMembers.SingleOrDefaultAsync(pm =>
                pm.ProjectId == project.Id && pm.UserId == request.Member.UserId);
                
                
            if (projectMember != null) return Result<Unit>.Failure("Already a member");
            
           

            projectMember =_mapper.Map<ProjectMember>(request.Member);
            projectMember.Project = project;
            projectMember.User = user;

            _context.ProjectMembers.Add(projectMember);

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            var projectResult = _mapper.Map<ProjectDto>(project);

            return !result
                ? Result<Unit>.Failure("Failed to create project")
                : Result<Unit>.Success(Unit.Value);
        }
    }
}