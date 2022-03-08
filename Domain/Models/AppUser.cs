using Microsoft.AspNetCore.Identity;

namespace Domain.Models;

public class AppUser : IdentityUser
{
    public string DisplayName { get; set; }
    public int ProfileId { get; set; }
    public UserProfile Profile { get; set; }
    public string Title { get; set; }
    public List<RefreshToken> RefreshTokens { get; set; } = new();
    public List<ProjectMember> Projects { get; set; } = new();
}