using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Security;

public class IsLeaderRequirement : IAuthorizationRequirement
{
}

public class IsLeaderRequirementHandler : AuthorizationHandler<IsLeaderRequirement>
{
    private readonly DataContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public IsLeaderRequirementHandler(DataContext dbContext,
        IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
        _dbContext = dbContext;
    }

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsLeaderRequirement requirement)
    {
        var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

        var isAdmin = context.User.IsInRole("Admin");

        if (isAdmin)
        {
            context.Succeed(requirement);
            return Task.CompletedTask;
        }

        if (userId == null) return Task.CompletedTask;

        var projectId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues
            .SingleOrDefault(x => x.Key == "id").Value?.ToString());


        var member = _dbContext.ProjectMembers.AsNoTracking()
            .SingleOrDefaultAsync(x => x.UserId == userId && x.ProjectId == projectId.ToString())
            .Result;

        if (member == null) return Task.CompletedTask;

        if (member.IsLeader) context.Succeed(requirement);

        return Task.CompletedTask;
    }
}