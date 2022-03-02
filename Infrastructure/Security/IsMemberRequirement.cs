using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Security;

public class IsMemberRequirement : IAuthorizationRequirement
{
}

public class IsMemberRequirementHandler : AuthorizationHandler<IsMemberRequirement>
{
    private readonly DataContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public IsMemberRequirementHandler(DataContext dbContext,
        IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
        _dbContext = dbContext;
    }

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsMemberRequirement requirement)
    {
        var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (userId == null) return Task.CompletedTask;
        
        var isAdmin = context.User.IsInRole("Admin");

        if (isAdmin)
        {
            context.Succeed(requirement);
            return Task.CompletedTask;
        }

        var projectId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues
            .SingleOrDefault(x => x.Key == "id").Value?.ToString());


        var member = _dbContext.ProjectMembers.AsNoTracking()
            .SingleOrDefaultAsync(x => x.UserId == userId && x.ProjectId == projectId.ToString())
            .Result;
        
        if (member == null) return Task.CompletedTask;
        
        context.Succeed(requirement);
        
        return Task.CompletedTask;
        
        

        // var attendee = _dbContext.ActivityAttendees
        //     .AsNoTracking()
        //     .SingleOrDefaultAsync(x => x.AppUserId == userId && x.ActivityId == activityId)
        //     .Result;
        //
        // if (attendee == null) return Task.CompletedTask;
        //
        // if (attendee.IsHost) context.Succeed(requirement);
        //return Task.CompletedTask;
    }
}