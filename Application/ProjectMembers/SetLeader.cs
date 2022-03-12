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

public class SetLeader
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public string MemberId { get; set; }
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
            var project = await _context.Projects
                .Include(p => p.Members)
                .SingleOrDefaultAsync(p => p.Id ==request.Id, cancellationToken);
            

            if (project == null) return Result<Unit>.Failure("Unable to find project");

            var projectMember = project.Members.Find(pm => pm.UserId == request.MemberId);
                
                
            if (projectMember == null) return Result<Unit>.Failure("Not a member");
            if (projectMember.IsLeader) return Result<Unit>.Failure("Already a project leader");
            
            project.Members.ForEach(m => m.IsLeader = false);
            projectMember.IsLeader = true;
            var result = await _context.SaveChangesAsync(cancellationToken) > 0;
            
            return !result
                ? Result<Unit>.Failure("Failed to create project")
                : Result<Unit>.Success(Unit.Value);
        }
    }
}