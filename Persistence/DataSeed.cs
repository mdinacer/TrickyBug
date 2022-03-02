using Domain.Models;
using Microsoft.AspNetCore.Identity;

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
                    DisplayName = "Bob",
                    UserName = "bob",
                    Email = "bob@test.com"
                },
                new()
                {
                    DisplayName = "Jane",
                    UserName = "jane",
                    Email = "jane@test.com"
                },
                new()
                {
                    DisplayName = "Tom",
                    UserName = "tom",
                    Email = "tom@test.com"
                },
                new()
                {
                    DisplayName = "Jack",
                    UserName = "jack",
                    Email = "jack@test.com"
                },
            };

            foreach (var user in users.Where(user => !userManager.Users.Any(u => u.Email == user.Email)))
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
                switch (user.DisplayName)
                {
                    case "Bob":
                        await userManager.AddToRoleAsync(user, "Admin");
                        break;
                    case "Jane":
                        await userManager.AddToRoleAsync(user, "Leader");
                        break;
                    case "Tom":
                        await userManager.AddToRoleAsync(user, "Developer");
                        break;
                    default:
                        await userManager.AddToRoleAsync(user, "Tester");
                        break;
                }
            }
        }
    }
}