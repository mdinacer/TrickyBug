namespace Domain.Models;

public class UserProfile
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Phone1 { get; set; }
    public string? Phone2 { get; set; }
    public string PhotoId { get; set; }
    public Photo Photo { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
    public DateTime LastLogin { get; set; } = DateTime.UtcNow;

    public string UserId { get; set; }
    public AppUser User { get; set; }
}