namespace Domain.Models;

public class BaseEntity
{
    public int Id { get; set; }
    public bool IsActive { get; set; } = true;
}

public class BaseAuthorEntity : BaseEntity
{
    public string AuthorId { get; set; }
    public AppUser Author { get; set; }
}