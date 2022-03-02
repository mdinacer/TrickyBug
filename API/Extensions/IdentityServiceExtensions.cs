using System.Text;
using Domain.Models;
using Infrastructure.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Persistence;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static IServiceCollection AddIdentityServices(this IServiceCollection services,
        IConfiguration config)
    {
        services.AddIdentityCore<AppUser>(opt =>
            {
                opt.User.RequireUniqueEmail = true;
                opt.Password.RequireNonAlphanumeric = false;
                opt.SignIn.RequireConfirmedEmail = false; //TODO: Enable in production
            })
            .AddRoles<UserRole>()
            .AddEntityFrameworkStores<DataContext>()
            .AddSignInManager<SignInManager<AppUser>>()
            .AddDefaultTokenProviders();

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWTSettings:TokenKey"]));

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt =>
            {
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = key,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                };
                opt.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        var accessToken = context.Request.Query["access_token"];
                        var path = context.HttpContext.Request.Path;
                        if (!string.IsNullOrEmpty(accessToken) && (path.StartsWithSegments("/chat")))
                        {
                            context.Token = accessToken;
                        }
                
                        return Task.CompletedTask;
                    }
                };
            });

        services.AddAuthorization(opt =>
        {
            opt.AddPolicy("IsProjectMember", policy => { policy.Requirements.Add(new IsMemberRequirement()); });
            opt.AddPolicy("IsProjectLeader", policy => { policy.Requirements.Add(new IsLeaderRequirement()); });
        });
        services.AddTransient<IAuthorizationHandler, IsMemberRequirementHandler>();
        services.AddTransient<IAuthorizationHandler, IsLeaderRequirementHandler>();


        return services;
    }
}