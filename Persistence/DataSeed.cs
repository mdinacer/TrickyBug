using Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public static class DataSeed
{
    public static async Task Seed(DataContext context, UserManager<AppUser> userManager,
        RoleManager<UserRole> roleManager)
    {
        string[] roles = { "Admin", "Leader", "Developer", "Tester" };

        foreach (var role in roles)
        {
            var roleExist = await roleManager.RoleExistsAsync(role);
            if (!roleExist) await roleManager.CreateAsync(new UserRole { Name = role });
        }

        if (!userManager.Users.Any())
        {
            var users = new List<AppUser>
            {
                new()
                {
                    DisplayName = "Bob Marley",
                    UserName = "bob",
                    Email = "bob@test.com",
                    Title = "Projects Manager"
                    
                },
                new()
                {
                    DisplayName = "Jane Dark",
                    UserName = "jane",
                    Email = "jane@test.com",
                    Title = "UI/UX Designer"
                },
                new()
                {
                    DisplayName = "Tom Cruise",
                    UserName = "tom",
                    Email = "tom@test.com",
                    Title = "Frontend Developer"
                },
                new()
                {
                    DisplayName = "Jack Bower",
                    UserName = "jack",
                    Email = "jack@test.com",
                    Title = "Backend Developer"
                },
            };

            foreach (var user in users.Where(user => !userManager.Users.Any(u => u.Email == user.Email)))
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
                switch (user.UserName)
                {
                    case "bob":
                        await userManager.AddToRoleAsync(user, "Admin");
                        break;
                    case "jane":
                        await userManager.AddToRoleAsync(user, "Leader");
                        break;
                    case "tom":
                        await userManager.AddToRoleAsync(user, "Developer");
                        break;
                    default:
                        await userManager.AddToRoleAsync(user, "Tester");
                        break;
                }
            }
        }


        // var projects = await context.Projects.Where(p => !p.IsActive).ToListAsync();
        //
        // if (projects.Any())
        // {
        //     foreach (var project in projects)
        //     {
        //         project.IsActive = true;
        //     }
        //
        //     await context.SaveChangesAsync();
        // }
        //
        // var inactiveUsers = await context.Users.Where(p => !p.IsActive).ToListAsync();
        //
        // if (inactiveUsers.Any())
        // {
        //     foreach (var user in inactiveUsers)
        //     {
        //         user.IsActive = true;
        //     }
        //
        //     await context.SaveChangesAsync();
        // }
    }
}