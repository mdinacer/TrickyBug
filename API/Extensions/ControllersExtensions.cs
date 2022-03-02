using Application.Validators;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;

namespace API.Extensions;

public static class ControllersExtensions
{
    public static IServiceCollection AddControllersConfig(this IServiceCollection services)
    {
        services.AddControllers(opt =>
            {
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                opt.Filters.Add(new AuthorizeFilter(policy));
            })
            .AddFluentValidation(config =>
            {
                config.RegisterValidatorsFromAssemblyContaining<CreateProjectValidator>();
            });
        return services;
    }
}