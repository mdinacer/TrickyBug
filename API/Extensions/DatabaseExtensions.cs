using Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions;

public static class DatabaseExtensions
{
    public static async Task<WebApplicationBuilder> InitializeDatabase(this WebApplicationBuilder builder)
    {
        using var scope = builder.Services.BuildServiceProvider().CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<DataContext>();
        var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
        var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<UserRole>>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

        try
        {
            await context.Database.MigrateAsync();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error during migrations");
        }

        try
        {
            await DataSeed.Seed(context, userManager, roleManager);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error during Data Seeding");
        }

        return builder;
    }
}